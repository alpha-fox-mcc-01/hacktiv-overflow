const { Answer } = require('../models/index')

module.exports = function (req, res, next) {
  Answer.findOne({_id: req.params.id, author: req.currentUserId})
      .then( answer => {
          if (answer) {
              next()
          } else {
              next({
                code: 400,
                message: 'No such record'
              })
          }
      })
      .catch(err => {
        next(err)
      })
}