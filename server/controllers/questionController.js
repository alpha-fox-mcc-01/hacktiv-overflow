const { Question } = require('../models/index')

class QuestionController {
  static postQuestion(req, res, next) {
      Question.create({
          title: req.body.title,
          author: req.currentUserId,
          content: req.body.content,
          category: req.body.category,
      })
              .then(result => {
                res.status(201).json({ message: 'Question successfully posted!'})
              })
              .catch(err => {
                next(err)
              })
  }
  static fetchQuestions(req, res, next) {
    Question.find()
            .then(result => {
              res.status(200).json({result: result})
            })
            .catch(err => {
              next(err)
            })
  }

  static fetchMine(req, res, next) {
    Question.find({ author: req.currentUserId})
            .then(result => {
              res.status(200).json({ result })
            })
            .catch(err => {
              next(err)
            })
  }

  static editQuestion(req, res, next) {
    Question.findByIdAndUpdate(req.params.id, {
      $set: {
        title: req.body.title, 
        content: req.body.content
      }
    })
          .then(result => {
            res.status(200).json({result: 'Update successful'})
          })
          .catch(err => { 
            next(err)
          })
  }

  static deleteQuestion(req, res, next) {
    console.log('masuk controller')
    Question.deleteOne({_id: req.params.id})
            .then(result => {
              res.status(200).json({message: 'Delete successful'})
            })
            .catch(err => {
              next(err)
            })
  }


}

module.exports = QuestionController