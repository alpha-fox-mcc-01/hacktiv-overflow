const { Question } = require('../models')
module.exports = {
  getQuestions(req, res, next) {
    if (!req.query.keyword) {
      Question.find().populate('answers')
      .populate('questionedBy')
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
    } else {
      Question.find({ title: {$regex: req.query.keyword, $options: 'i'}}).populate('answers')
      .populate('questionedBy')
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
    }
  },
  getUserQuestions(req, res, next) {
    Question.find({questionedBy: req.currentUserId}).populate('answers')
      .populate('questionedBy')
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  },
  addQuestion(req, res, next) {
    let tags = null
    if (req.body.tags.length) {
      tags = req.body.tags.split(',')
    }
    Question.create({
      title: req.body.title,
      description: req.body.description,
      upvotes: [],
      downvotes: [],
      tags,
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
  },
  voteQuestion(req, res, next) {
    let vote = {
      user: req.currentUserId,
      value: Number(req.body.value)
    }
    Question.findByIdAndUpdate(req.params.id, {
      $push: { votes: vote }
    }, { new: true })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        console.log(err)
        next(err)
      })
  }
}