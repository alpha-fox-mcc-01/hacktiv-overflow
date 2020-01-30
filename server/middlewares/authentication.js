const User = require('../models/user')
const bcrypt = require('bcryptjs')

module.exports = (req, res, next) => {
  User
    .findOne({
      email: req.body.email
    })
    .then(user => {
      if(user){
        const isValid = bcrypt.compareSync(req.body.password, user.password)
        if(isValid){
          req.currentUserId = user._id
          next()
        } else {
          res.status(400).json({
            msg: 'Wrong Email/Password'
          })
        }
      } else {
        res.status(400).json({
          msg: 'Wrong Email/Password'
        })
      }
    })
    .catch(err => {
      next(err)
    })
}