const Answer = require('../models/answer')

module.exports = {
  addAnswer(req, res, next) {
    const { body } = req.body;
    Answer.create({
      body
    })
      .then(answer => {
        res
          .status(200)
          .json(answer)
      })
      .catch(err => next(err))
  },

  showAllAnswer(req, res, next) {
    Answer.find({})
      .then(answers => {
        res
          .status(200)
          .json(answers)
      })
      .catch(err => {
        next(err)
      })
  },

  showAnswerByPost(req, res, next) {
    const { id } = req.params
    Post.findOne({ PostId: id })
      .then(posts => {
        res
          .status(200)
          .json(posts)
      })
      .catch(err => {
        next(err)
      })
  },
}