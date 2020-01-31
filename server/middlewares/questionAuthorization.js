const { Question } = require('../models')
module.exports = (req, res, next) => {
  Question.findById(req.params.id)
    .then(data => {
      if (data.questionedBy == req.currentUserId) {
        next()
      } else {
        res.status(401).json({
          message: 'User is not authorized to perform that action'
        })
      }
    })
    .catch(err => {
      next(err)
    })
}