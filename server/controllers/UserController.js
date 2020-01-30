const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class UserController {
  static register(req, res, next) {
    const { name, email, password } = req.body;
    User.create({
      name,
      email,
      password
    })
      .then(user => {
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email
        })
      })
      .catch(next);
  }

  static login(req, res, next) {
    const { email, password } = req. body;
    if(!req.body.email || !req.body.password) {
      next({
        name: 'Bad Request',
        errors: [ 'Email address and password is required' ],
        status: 400
      })
    } else {
      User.findOne({
        email
      })
        .then(user => {
          if(user) {
            const verified = bcrypt.compareSync(password, user.password);
            if(verified) {
              const access_token = jwt.sign({ _id: user._id }, process.env.SECRET);
              res.status(200).json({
                access_token,
                name: user.name,
                userId: user._id
              });
            } else {
              next({
                name: 'Bad Request',
                errors: [ 'Email or password is wrong' ],
                status: 400
              })
            }
          } else {
            next({
              name: 'Bad Request',
              errors: [ 'Email or password is wrong' ],
              status: 400
            })
          }
        })
        .catch(next);
    }
  }
};

module.exports = UserController;