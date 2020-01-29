const { Answer } = require('../models')
module.exports = (req, res, next) => {
  Answer.findById(req.params.id)
    .then(data => {
      if (data.answeredBy === req.currentUserId) {
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