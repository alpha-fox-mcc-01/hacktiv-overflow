const User = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  let token = req.headers.token
  // console.log(token)
  if(token){
    const authenticated = jwt.verify(token, process.env.JWT_SECRET)
    // console.log(authenticated)
    User
      .findById({
        _id: authenticated._id
      })
      .then(user => {
        if(user) {
          req.currentUserId = authenticated._id
          next()
        }else {
          next({
            name: 'Bad Request',
            message: 'User Not Found',
            status: 404
          })
        }
      })
      .catch(next)
  } else {
    next(err)
  }
}