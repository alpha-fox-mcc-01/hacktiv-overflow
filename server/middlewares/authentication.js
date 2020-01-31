const User = require('../models/User')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const decoded = jwt.verify(req.headers.token, process.env.SECRET)
  User.findById(decoded.id)
    .then(user => {
      if (user){
        req.currentUserId = user._id
        next()
      } else {
        next({
          msg :'Not found',
          error: `User with id ${decoded.id} not found`
        })
      }
    })
    .catch(err => {
      next(err)
    })
}