const Post = require('../models/post')

module.exports = {
  addQuestion(req, res, next) {
    const { title, body, category } = req.body;
    Post.create({
      title,
      body,
      category
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
    Post.find({})
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
    Post.findOne({ _id: id })
      .then(post => {
        res
          .status(200)
          .json(post)
      })
      .catch(err => {
        next(err)
      })
  },
}