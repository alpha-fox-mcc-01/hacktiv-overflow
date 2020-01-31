const { Question } = require('../models')
const { Answer } = require('../models')

module.exports = function () {
  let negative = []
  Question.find()
    .then(questions => {
      questions.forEach(question => {
        let value = 0
        question.votes.forEach(vote => {
          value += vote.value
        })
        if (value < 0) {
          negative.push(question._id)
        }
      })
      return Question.deleteMany({ _id: { $in: negative}})
    })
    .then((response) => {
      console.log(response)
    })
    .catch(err => {
      console.log(err.message)
    })
}