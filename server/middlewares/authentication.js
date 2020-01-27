const { User } = require('../models')
const jwtAccess = require('../jwtAccess')
module.exports = (req, res, next) => {
  let token = req.headers.access_token
  jwtAccess.verify(token)
    .then(decoded => {
      return User.findById(decoded._id)
    })
    .then(user => {
      if (!user) {
        next({
          name: "Login Error",
          message: "Token is no longer valid"
        })
      } else {
        req.currentUserId = decoded._id
        next()
      }
    })
    .catch(err => {
      next(err)
    })
}