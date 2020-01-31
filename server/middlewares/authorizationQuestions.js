const { Question } = require('../models/index')

module.exports = function (req, res, next) {
  console.log('masuk authorization')
  Question.findOne({ _id: req.params.id, author: req.currentUserId})
          .then(result => {
            console.log(result, 'hasil auth')
            if (result) {
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
