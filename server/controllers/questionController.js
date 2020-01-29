const { Question } = require('../models')
module.exports = {
  getQuestions(req, res, next) {
    Question.find()
      .populate('upvotes')
      .populate('downvotes')
      .populate('questionedBy')
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  },
  addQuestion(req, res, next) {
    Question.create({
      title: req.body.title,
      description: req.body.description,
      upvotes: [],
      downvotes: [],
      tags: req.body.tags.split(','),
      questionedBy: req.currentUserId
    })
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        next(err)
      })
  },
  editQuestion (req, res, next) {
    Question.findByIdAndUpdate(req.params.id, {
      $set: { title: req.body.title, description: req.body.description } ,
    }, {new: true})
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        console.log(err)
        next(err)
      })
  },
  deleteQuestion (req, res, next) {
    Question.findByIdAndDelete(req.params.id)
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        console.log(err)
        next(err)
      })
  }
}