const Question = require('../models/Question')

module.exports = (req, res, next) => {
  if (req.headers.route === 'questions') {
    Question.findById(req.params.id)
      .then(question => {
        if (question) {
          if (String(question.ownerId) == req.currentUserId) {
            next()
          } else {
            console.log(question.ownerId)
            console.log(req.currentUserId)
            next({
              msg: 'Not Authorized',
              desc: 'question'
            })
          }
        } else {
          next({ msg: 'Not found', error: 'No question found' })
        }
      })
      .catch(err => {
        next(err)
      })
  } else {
    next({msg: 'answer otw'})
  }
}
