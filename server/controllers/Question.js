const Question = require('../models/Question')

class QuestionController {
  static create (req, res, next) {
    const { title, description } = req.body
    Question.create({
        title,
        description,
        ownerId: req.currentUserId
    })
      .then(question=>{
          res.status(201).json({
            question,
            msg: `Question with title ${question.title} created`
          })
      })
      .catch(err=>{
          next(err)
      })
  }

  static getAllQuestion (req, res, next) {
    Question.find()
      .then(questions=>{
        if (questions.length) res.status(200).json(questions)
        else next({ msg: 'Not found', error: 'No question found' })
      })
      .catch(err=>{
          next(err)
      })
  }

  static getOneQuestion (req, res, next) {
    Question.findById(req.params.id)
      .then(question=>{
        if (question) res.status(200).json(question)
        else next({ msg: 'Not found', error: 'No question found' })
      })
      .catch(err=>{
          next(err)
      })
  }

  static updateQuestion (req, res, next) {
    const { title, description } = req.body
    Question.findByIdAndUpdate(req.params.id, {
      title,
      description
    })
      .then(question=>{
          res.status(200).json({msg : `Product with title '${question.title}' updated successfully`, question})
      })
      .catch(err=>{
          next(err)
      })
  }

  static deleteQuestion (req, res, next) {
    Question.findByIdAndDelete(req.params.id)
      .then(question=>{
          res.status(200).json({msg : `Question with title ${question.title} deleted successfully`, question})
      })
      .catch(err=>{
          console.log(err)
          next(err)
      })
  }

}

module.exports = QuestionController