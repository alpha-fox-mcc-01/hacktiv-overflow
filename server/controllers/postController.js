const Post = require('../models/Post')
const Comment = require('../models/Comment')

class PostController {
  static newPost (req, res, next) {
    let values = {
      owner: req.authenticated_id,
      title: req.body.title,
      content: req.body.content,
      isResolved: false,
      language: []
    }
    if (req.body.language) {
			let splittedLanguage = req.body.language.split(',')
			splittedLanguage.forEach(row => {
				row = row.trim()
				if (row.length > 1) {
					values.language.push(row)
				}
			})
    }
    
    Post.create(values)
      .then(result => {
        res.status(201).json(values)
      })
      .catch(err => {
        console.log(err)
      })
  }

  static fetchPosts (req, res, next) {
    Post.find()
      .then(result => {
        res.status(200).json(result)
      })
      .catch(err => {
        next(err)
      })
  }

  static fetchMine (req, res, next) {
    Post.find({owner: req.authenticated_id})
      .then(result => {
        res.status(200).json(result)
      })
      .catch(err => {
        next(err)
      })

  }

  static fetchOne (req, res, next) {
    Post.findById(req.params.postId)
      .populate('owner','-password')
      .then(post => {
        res.status(200).json(post)
      })
      .catch(err => {
        next(err)
      })
  }

  static edit (req, res, next) {
    let values = {
      title: req.body.title,
      content: req.body.content,
      language: []
    }
    if (req.body.language) {
			let splittedLanguage = req.body.language.split(',')
			splittedLanguage.forEach(row => {
				row = row.trim()
				if (row.length > 1) {
					values.language.push(row)
				}
			})
    }

    Post.findOneAndUpdate({_id: req.body.postId},values,{new:true})
      .then(result => {
        res.status(200).json(result)
      })
      .catch(err => {
        next(err)
      })
  }

  static delete (req, res, next) {
    Post.deleteOne({_id:req.body.postId})
      .then(result => {
        res.status(204).json(result)
      })
      .catch(err => {
        next(err)
      })
  }

  static postComment (req, res, next) {
    Comment.create({
      userId: req.authenticated_id,
      postId: req.body.postId,
      markedAsAnswer: false,
      votes: [],
      comment: req.body.comment
    })
      .then(result => {
        res.status(201).json(result)
      })
      .catch(err => {
        next(err)
      })
  }

  static likeComment (req, res, next) {
  
  }

  static getComment (req, res, next) {
    console.log(req.params.postId, 'get comment postId')
    Comment.find({postId: req.params.postId})
      .populate('userId','name')
      .then(result => {
        res.status(200).json(result)
      })
      .catch(err => {
        next(err)
      })
  }

  static votePost (req, res, next) {
    console.log(req.body.postId)
    console.log(req.authenticated_id)
    console.log(req.body.point)
    Post.findOne({
      _id: req.body.postId,
      'votes.voter': req.authenticated_id,
      'votes.point': req.body.point
    })
      .then(result => {
        if (result) {
          console.log('pulling')
          return Post.updateOne({_id:req.body.postId},
            {
              $pull: {votes: {
                voter: req.authenticated_id
              }}
            },
            {new: true})
        } else {
          return Post.updateOne({_id:req.body.postId},
            {
              votes: {
                voter: req.authenticated_id,
                point: req.body.point
              }
            },
            {new: true})
        }
      })
      .then(result => {
        res.status(200).json(result)
      })
      .catch (err => {
        throw err
      })
  }
  
}

module.exports = PostController