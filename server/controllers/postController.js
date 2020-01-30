const Post = require('../models/post')
const fs = require('fs')
const aws = require('aws-sdk')

module.exports = {
  addQuestion(req, res, next) {
    const { title, body, category, UserId } = req.body;
    aws.config.setPromisesDependency();
    aws.config.update({
      accessKeyId: process.env.ACCESSKEY,
      secretAccessKey: process.env.SECRETACCESSKEY,
      region: process.env.REGION
    })

    const s3 = new aws.S3();
    const params = {
      ACL: 'public-read',
      Bucket: process.env.BUCKET,
      Body: fs.createReadStream(req.file.path),
      Key: `Hacktifire/${req.file.originalname}`
    };

    s3.upload(params, (err, data) => {
      if (err) {
        console.log('Error occured while trying to upload to S3 bucket', err);
      } else if (data) {
        fs.unlinkSync(req.file.path)
        const imageUrl = data.Location || ""
        Post.create({
          title,
          body,
          category,
          UserId,
          imageUrl
        })
          .then(post => {
            res
              .status(200)
              .json(post)
          })
          .catch(err => next(err))
      }
    })
  },

  addQuestionWithoutPic(req, res, next) {
    const { title, body, category, UserId } = req.body;
    Post.create({
      title,
      body,
      category,
      UserId
    })
      .then(post => {
        res
          .status(200)
          .json(post)
      })
      .catch(err => next(err))
  },

  deleteQuestion(req, res, next) {
    const { id } = req.params
    Post.findByIdAndDelete({ _id: id })
      .then(() => {
        res
          .status(200)
          .json({ msg: 'Item has been deleted' })
      })
      .catch(err => {
        next(err)
      })
  },

  showAllQuestion(req, res, next) {
    Post.find({}).populate('UserId answers upvoters downvoters')
      .then(posts => {
        res
          .status(200)
          .json(posts)
      })
      .catch(err => {
        next(err)
      })
  },

  showOneQuestion(req, res, next) {
    const { id } = req.params
    Post.findOne({ _id: id }).populate('UserId answers upvoters downvoters')
      .then(post => {
        res
          .status(200)
          .json(post)
      })
      .catch(err => {
        next(err)
      })
  },

  addAnswer(req, res, next) {
    const { postId, answerId } = req.body
    Post.findOneAndUpdate({ _id: postId }, { $push: { answers: answerId } })
      .then(success => {
        res
          .status(200)
          .json(success)
      })
      .catch(err => {
        next(err)
      })
  },

  // addVote(req, res, next) {
  //   const { postId, votersId, type } = req.body
  //   let voting;
  //   if (type === "upvote") {
  //     voting = Post.findOneAndUpdate({ _id: postId }, { $push: { upvoters: votersId } })
  //   } else if (type === "downvote") {
  //     voting = Post.findOneAndUpdate({ _id: postId }, { $push: { downvoters: votersId } })
  //   }
  //   voting
  //     .then(success => {
  //       res
  //         .status(200)
  //         .json(success)
  //     })
  //     .catch(err => {
  //       next(err)
  //     })
  // },

  addVote(req, res, next) {
    const { postId, votersId, type } = req.body
    let voting;

    Post.findOne({ _id: postId })
      .then(result => {
        if (type === "upvote") {
          voting = Post.findOneAndUpdate({ _id: postId }, { $push: { upvoters: votersId } })
          if (result.upvoters.includes(votersId)) {
            res.status(403).json({ msg: "You've already upvoted this post" })
          } else {
            Post.updateOne({ _id: postId }, { $pull: { downvoters: votersId } })
              .then(() => {
                voting
                  .then(success => {
                    res
                      .status(200)
                      .json(success)
                  })
                  .catch(err => {
                    next(err)
                  })
              })
              .catch(err => {
                next(err)
              })
          }
        } else if (type === "downvote") {
          voting = Post.findOneAndUpdate({ _id: postId }, { $push: { downvoters: votersId } })
          if (result.downvoters.includes(votersId)) {
            res.status(403).json({ msg: "You've already downvoted this post" })
          } else {
            Post.updateOne({ _id: postId }, { $pull: { upvoters: votersId } })
              .then(() => {
                voting
                  .then(success => {
                    res
                      .status(200)
                      .json(success)
                  })
                  .catch(err => {
                    next(err)
                  })
              })
              .catch(err => {
                next(err)
              })
          }
        }
      })
  }

  // addVote(req, res, next) {
  //   const { postId, votersId, type } = req.body
  //   let voting;
  //   if (type === "upvote") {
  //     voting = Post.findOneAndUpdate({ _id: postId }, { $push: { upvoters: votersId } })
  //   } else if (type === "downvote") {
  //     voting = Post.findOneAndUpdate({ _id: postId }, { $push: { downvoters: votersId } })
  //   }
  //   voting
  //     .then(success => {
  //       res
  //         .status(200)
  //         .json(success)
  //     })
  //     .catch(err => {
  //       next(err)
  //     })
  // },

  // canVote(req, res, next) {
  //   const { postId, votersId, type } = req.body
  //   Post.findOne({ _id: postId })
  //     .then(result => {
  //       if (type === "upvote") {
  //         if (result.upvoters.includes(votersId)) {
  //           res.status(403).json({ msg: "You're already upvoted this post" })
  //         } else {
  //           res.status(200).json({ msg: "Success" })
  //         }
  //       } else if (type === "downvote") {
  //         if (result.downvoters.includes(votersId)) {
  //           res.status(403).json({ msg: "You're already downvoted this post" })
  //         } else {
  //           res.status(200).json({ msg: "Success" })
  //         }
  //       }
  //     })
  // }
}