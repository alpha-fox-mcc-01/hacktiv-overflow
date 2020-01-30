const { User } = require('../models/index')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

class UserController {
  static register(req, res, next) {
    User.create({
        email: req.body.email,
        password: req.body.password,
        username: req.body.username
    })
      .then(result => {
        res.status(201).json({result: result.email})
      })
      .catch(err => {
        next(err)
      })
  }
  static login(req, res, next) {
    User.findOne({email: req.body.email})
        .then(user => {
          console.log('masuk user')
          if (user) {
            console.log(user)
            let checkPassword = bcrypt.compareSync(req.body.password, user.password)
            if (checkPassword) {
              let access_token = jwt.sign({ _id: user._id}, process.env.SECRET)
              res.status(200).json({access_token : access_token})
            } else {
              res.status(400).json({error: 'Username/password wrong'})
            }
          } else {
            res.status(400).json({error: 'Username/password wrong'})
          }
        })
        .catch(err => {
          next(err)
        })
  }
}

module.exports = UserController