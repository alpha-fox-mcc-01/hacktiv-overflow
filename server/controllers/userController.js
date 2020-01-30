const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class UserController {
  static signUp (req, res, next) {
    const registerNewsLetter = req.body.registerNewsLetter
    User.create({
      password: req.body.password,
      email: req.body.email,
      name: req.body.name,
    })
      .then(user => {
        let response = {
          name: user.name,
          email: user.email,
        }
        // response.access_token = jwt.sign({_id: user._id}, process.env.JWTKEY)
        res.status(201).json(response)
      })
      .catch(err => {
        next(err)
      })
  }

  static signIn (req, res, next) {
    User.findOne({email: req.body.email})
      .then(user => {
        if (user) {
          const authorized = bcrypt.compareSync(req.body.password, user.password)
          if (authorized) {
            const access_token = jwt.sign({_id: user._id}, process.env.JWTKEY)
            res.status(200).json({access_token})
          } else {
            next({
              code: 403,
              msg: 'wrong email & password combination'
            })  
          }
        } else {
          next({
            code: 403,
            msg: 'wrong email & password combination'
          })
        }
      })
      .catch(err => {
        next(err)
      })
  }

  static verify (req, res, next) {
    try {
      let payload = jwt.verify(req.headers.access_token, process.env.JWTKEY)
      User.findOne({ _id: payload._id}, ['-password'])
        .then(result => {
          res.status(200).json(result)
        })
        .catch(err => {
          next(err)
        })
    } catch (err) {
      next(err)
    }
  }
}
module.exports = UserController