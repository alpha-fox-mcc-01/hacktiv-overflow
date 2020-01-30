const User = require('../models/user')
const jwt = require('jsonwebtoken')

class UserController {
  static register (req, res, next) {
    let data = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }
    User
      .create(data)
      .then(user => {
        res.status(201).json(user)
      })
      .catch(err => {
        console.log(err)
        next(err)
      })
  }

  static login (req, res, next) {
    User
      .findOne({
        _id : req.currentUserId
      })
      .then(user => {
        const token = jwt.sign({ _id: req.currentUserId }, process.env.JWT_SECRET)
        res.status(200).json({
          _id: user._id,
          username: user.username,
          email: user.email,
          token
        })
      })
      .catch(err => {
        console.log(err)
        next(err)
      })
  }
}

module.exports = UserController