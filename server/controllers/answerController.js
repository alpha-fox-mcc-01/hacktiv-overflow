const { Answer } = require('../models')
const ObjectID = require('mongoose').Types.ObjectId
module.exports = {
	getAnswers (req, res, next) {
		Answer.find()
			.then(data => {
				res.status(200).json(data)
			})
			.catch(err => {
				console.log(err.message)
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
			question: req.query.questionId
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
	}
}