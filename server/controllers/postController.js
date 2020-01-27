const { Post } = require('../models')
module.exports = {
  getPosts(req, res, next) {
    Post.find()
      .populate('votes.user')
      .populate('replies.user')
      .populate('replies.votes.user')
      .populate('postedBy')
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  },
  addPost(req, res, next) {
    Post.create({
      title: req.body.title,
      content: req.body.content,
      votes: [],
      replies: [],
      tags: req.body.tags.split(','),
      postedBy: req.currentUserId
    })
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        next(err)
      })
  }
}