const Question = require('../models/Question')

class QuestionController {
    static postQuestion (req, res, next) {
        const title = req.body.title
        const question = req.body.question
        const userId = req.currentUser.id
        const username = req.currentUser.username
        console.log(req.body)
        Question.create({ title, question, userId, username })
                .then(created => {
                    res.status(201).json(created)
                })
                .catch(next)
    }

    static getAllQuestions (req, res, next) {
        Question.find({})
                .then(questions => {
                    res.status(200).json(questions)
                })
                .catch(next)
    }

    static getOneQuestion (req, res, next) {
        Question.findById(req.params.id)
                .then(question => {
                    res.status(200).json(question)
                })
                .catch(next)
    }

    static deleteQuestion (req, res, next) {
        const _id = req.params.id
        Question.deleteOne({ _id })
                .then(deleted => {
                    res.status(200).json('Question has been successfully deleted')
                })
                .catch(next)
    }

    static updateQuestion (req, res, next) {
        const _id = req.params.id
        const title = req.body.title
        const question = req.body.question
        Question.findOneAndUpdate({_id}, { $set: { title, question } })
                .then(updated => {
                    res.status(200).json('Question has been successfully updated')
                })
                .catch(next)
    }
}

module.exports = QuestionController