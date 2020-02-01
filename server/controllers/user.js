const User = require('../models/user')
const bcrypt = require('bcryptjs')
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
        email: req.body.email
      })
      .then(user => {
        if(user){
          const isValid = bcrypt.compareSync(req.body.password, user.password)
          if(isValid){
            const token = jwt.sign({ _id: user._id}, process.env.JWT_SECRET)
            res.status(200).json({
              username: user.username,
              email: user.email,
              token
            })
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
        console.log(err)
        next(err)
      })
  }
}

module.exports = UserController