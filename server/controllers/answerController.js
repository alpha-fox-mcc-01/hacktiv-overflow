const { Answer, Question } = require('../models/index')

class AnswerController {
	static postAnswer(req, res, next) {
		Answer.create({
				title: req.body.title,
				content: req.body.content,
				questionId: req.params.id,
				author: req.currentUserId
		})
		.then(result => {
			res.status(200).json({message: 'Answer successfully posted!'})
		})
		.catch(err => {
			next(err)
		})
			
	}
	static fetchAnswers(req, res, next) {
		Answer.find({questionId: req.params.id})
					.then(result => {
						res.status(200).json({result})
					})
					.catch(err => {
						next(err)
					})
	}
	
	static editAnswer(req, res, next){
		Answer.findByIdAndUpdate(req.params.id, {
      $set: {
        title: req.body.title, 
        content: req.body.content
      }
		})
					.then(result => {
						console.log('masuk controller')
						res.status(200).json({message: 'Answer successfully edited!'})
					})
					.catch(err => {
						next(err)
					})
	}

	static fetchMyAnswers(req, res, next) {
		Answer.find({author: req. currentUserId})
					.then(result => {
						res.status(200).json({result})
					})
					.catch(err => {
						next(err)
					})
	}

}


module.exports = AnswerController