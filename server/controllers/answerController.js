const { Answer } = require('../models')
const ObjectID = require('mongoose').Types.ObjectId
module.exports = {
	getAnswers (req, res, next) {
		Answer.find({'question': ObjectID(req.query.questionId)}).populate('question')
      .populate('answeredBy')
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        console.log(err.message)
        next(err)
      })
	},
	getUserAnswers(req, res, next) {
		Answer.find({questionedBy: req.currentUserId}).populate('question')
		  .populate('questionedBy')
		  .then(data => {
			res.status(200).json(data)
		  })
		  .catch(err => {
			next(err)
		  })
	  },
	writeAnswer (req, res, next) {
		Answer.create({
			title: req.body.title,
			description: req.body.description,
			upvotes: [],
			downvotes: [],
			answeredBy: req.currentUserId,
			question: req.query.questionId,
			answers: []
		})
			.then(data => {
				res.status(201).json(data)
			})
			.catch(err => {
				console.log(err.message)
				next(err)
			})
	},
	editAnswer (req, res, next) {
		Answer.findByIdAndUpdate(req.params.id, {
			$set: { title: req.body.title, description: req.body.description }
		}, { new: true })
			.then(data => {
				res.status(200).json(data)
			})
			.catch(err => {
				console.log(err.message)
				next(err)
			})
	},
    voteAnswer (req, res, next) {
    let vote = {
      user: req.currentUserId,
      value: Number(req.body.value)
    }
    Answer.findByIdAndUpdate(req.params.id, {
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