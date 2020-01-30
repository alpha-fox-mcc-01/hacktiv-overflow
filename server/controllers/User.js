const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class UserController {
  static register (req, res, next) {
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
      .then(user => {
        const token = jwt.sign({ id: user._id }, process.env.SECRET)
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          token
        })
      })
      .catch(err => {
        next(err)
      })
  }

  static login (req, res, next) {
    User.findOne({
      email: req.body.email      
    })
      .then(user => {
        if (user){
          if (bcrypt.compareSync(req.body.password, user.password)){
            const token = jwt.sign({ id: user._id }, process.env.SECRET);
            res.status(200).json({
              _id: user._id,
              name: user.name,
              email: user.email,
              token
            })
          } else {
            next({
              msg :'Input Wrong',
              error: 'Username / Password is wrong'
            })
          }
        } else {
          next({
            msg :'Input Wrong',
            error: 'Username / Password is wrong'
          })
        }
      })
      .catch(err => {
        next(err)
      })
  }

  static getUserData (req, res, next) {
    User.findById(req.params.id)
      .then(user => {
        if (user){
          res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email
          })
        } else {
          next({
            msg :'Not found',
            error: `User with id ${req.params.id} not found`
          })
        }
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = UserController