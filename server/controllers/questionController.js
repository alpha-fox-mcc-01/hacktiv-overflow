const { Question, Answer } = require('../models/index')
const ObjectID = require('mongoose').Types.ObjectId

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
    Question.find().populate('author')
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

  static voteQuestion(req, res, next){
    let vote = {
      userId: req.currentUserId,
      value: req.body.value
    }
    Question.findOne({_id: req.params.id, 'votes.userId': req.currentUserId })      
       .then(result => {
          if (!result) {
            Question.updateOne({_id: req.params.id},  { $push: { votes: vote } })
            .then(_ => {
              res.status(200).json({message: 'Votes successfully updated'})
            })
            .catch(err => {
              next(err)
            })
          } else {
            for (let i = 0; i < result.votes.length; i++) {
              if (result.votes[i].userId == req.currentUserId.toString()) {
                if (result.votes[i].value == req.body.value) {
                  Question.updateOne({_id: req.params.id},  { $pull: { votes: { userId: req.currentUserId }}})
                          .then(result => {
                            res.status(200).json({message: 'Vote successfully updated'})
                          })
                          .catch(err => {
                            next(err)
                          })
                } else {
                  Question.findOneAndUpdate({_id: req.params.id, 'votes.userId': req.currentUserId},  { $set: { 'votes.$.value': req.body.value }})
                  .then(result => {
                    res.status(200).json({message: 'Vote successfully updated'})
                  })
                  .catch(err => {
                    next(err)
                  })
                }
              }
            }
          }
        })
        .catch(err => {
          next(err)
        })
  }
  static search(req, res, next) {
    let keyword = req.params.keyword
    Question.find({ 
      $or: [ {title: {$regex : `${keyword}`, $options: 'gi'}}, 
      {category: {$regex: `${keyword}`, $options: 'gi'}}]})
            .then(result => {
              res.status(200).send({result})
            })
            .catch(err => {
              next(err)
            })
  }

  // static getQuestionAnswer(req, res, next) {
  //   let question
  //   Question.findOne({_id: req.params.id})
  //           .then(result => {
  //             question = result
  //             return Answer.findOne({questionId: })
  //           })
  // }


}

module.exports = QuestionController