const Answer = require('../models/answer')

class QuestionController {
  static createAnswer (req, res, next) {
    let data = {
      title: req.body.title,
      content: req.body.content,
      userId: req.currentUserId
    }
    Answer
      .create(data)
      .then(question => {
        res.status(200).json(question)
      })
      .catch(err => {

      })
  }
}

module.exports = QuestionController