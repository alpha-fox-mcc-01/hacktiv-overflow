const Answer = require('../models/answer')
const Question = require('../models/question')

class AnswerController {
  static createAnswer (req, res, next) {
    let answerData
    let data = {
      title: req.body.title,
      content: req.body.content,
      userId: req.currentUserId,
      vote: 0
    }
    Answer
      .create(data)
      .then(answer => {
        answerData = answer
        return Question
          .findOneAndUpdate({
            _id : req.body.questionId
          },
          {
            $push: {
              answerId: answerData._id
            }
          })
      })
      .then(question => {
        console.log(question, '<=========')
        res.status(200).json(question)
      })
      .catch(err => {
        next(err)
      })
  }

  static getAnswerById (req, res, next) {
    console.log(req.params.id)
    Answer
      .findById({
        _id: req.params.id
      })
      .populate('userId', 'username')
      .then(answer => {
        console.log(answer, '<????????')
        res.status(200).json(answer)
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = AnswerController