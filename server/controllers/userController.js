const { User } = require('../models')
const bcrypt = require('bcryptjs')
const jwtAccess = require('../jwtAccess')
module.exports = {
  newUser(req, res, next) {
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        next(err)
      })
  },
  logUser(req, res, next) {
    User.findOne({email: req.body.email})
      .then(user => {
        if (!user) {
          next({
            status: 400,
            name: 'Login Error',
            message: 'Email/Password is wrong'
          })
        } else {
          if (bcrypt.compareSync(req.body.password, user.password)) {
            let access_token = jwtAccess.sign({ _id: user._id })
            res.status(200).json({ access_token })
          } else {
            next({
              status: 400,
              name: 'Login Error',
              message: 'Email/Password is wrong'
            })
          }
        }
      })
      .catch(err => {
        next(err)
      })
  }
}