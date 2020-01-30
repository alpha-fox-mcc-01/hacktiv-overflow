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

	static deleteAnswer(req, res, next) {
		Answer.deleteOne({_id: req.params.id})
					.then(result => {
						res.status(200).json({message: 'Answer successfully deleted'})
					})
					.catch(err => {
						next(err)
					})
	}

	static voteAnswer(req, res, next) {
		let vote = {
      userId: req.currentUserId,
      value: req.body.value
    }
    Answer.updateOne({_id: req.params.id},  { $push: { votes: vote } })
            .then(result => {
              res.status(200).json({message: 'Vote successfully added'})
            })
            .catch(err => {
              next(err)
            })
	}

	static voteAnswer(req, res, next){
		let vote = {
		  userId: req.currentUserId,
		  value: req.body.value
		}
		Answer.findOne({_id: req.params.id, 'votes.userId': req.currentUserId })         .then(result => {
			  if (!result) {
				Answer.updateOne({_id: req.params.id},  { $push: { votes: vote } })
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
					  Answer.updateOne({_id: req.params.id},  { $pull: { votes: { userId: req.currentUserId }}})
							  .then(result => {
								res.status(200).json({message: 'Vote successfully updated'})
							  })
							  .catch(err => {
								next(err)
							  })
					} else {
					  Answer.findOneAndUpdate({_id: req.params.id, 'votes.userId': req.currentUserId},  { $set: { 'votes.$.value': req.body.value }})
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

}


module.exports = AnswerController