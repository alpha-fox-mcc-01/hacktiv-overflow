const { User } = require('../models')
const jwtAccess = require('../jwtAccess')
module.exports = (req, res, next) => {
  let token = req.headers.access_token
  let userId = null
  jwtAccess.verify(token)
    .then(decoded => {
      userId = decoded._id
      return User.findById(decoded._id)
    })
    .then(user => {
      if (!user) {
        next({
          name: "Login Error",
          message: "Token is no longer valid"
        })
      } else {
        req.currentUserId = userId
        next()
      }
    })
    .catch(err => {
      next(err)
    })
}