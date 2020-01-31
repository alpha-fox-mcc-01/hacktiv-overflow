const jwt = require('jsonwebtoken')
const { User } = require('../models/index')
module.exports = function (req, res, next) {
    var access_token = req.headers.access_token
    try {
      let decoded = jwt.verify(access_token, process.env.SECRET)
      User.findOne( {
          _id : decoded._id
      })
          .then(result => {
              if (result) {
                  req.currentUserId = result._id
                  console.log(req.currentUserId, 'ini current user id' )
                  next()
              } else {
                  next({
                    code: 400,
                    message: 'You are not authenticated, please log in!'
                  })
              }
          })
          .catch(err => {
              next(err)
          })
  } catch(err) {
      next(err)
  }
}