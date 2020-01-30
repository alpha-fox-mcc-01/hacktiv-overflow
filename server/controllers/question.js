const Question = require('../models/question')

class QuestionController {
  static createQuestion (req, res, next) {
    let data = {
      title: req.body.title,
      content: req.body.content,
      userId: req.currentUserId
    }
    Question
      .create()
  }
}

module.exports = QuestionController