const Question = require('../models/question')

class QuestionController {
  static createQuestion (req, res, next) {
    let data = {
      title: req.body.title,
      content: req.body.content,
      userId: req.currentUserId,
      answerId: [],
      vote: 0
    }
    Question
      .create(data)
      .then(question => {
        res.status(200).json(question)
      })
      .catch(err => {
        next(err)
      })
  }

  static getAllQuestion (req, res, next) {
    Question
      .find()
      .then(questions => {
        res.status(200).json(questions)
      })
      .catch(err =>{
        next(err)
      })
  }
}

module.exports = QuestionController