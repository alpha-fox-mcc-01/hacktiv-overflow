const User = require('../models/User')
const jwt = require('jsonwebtoken')
const secret = process.env.SECRET

class UserController {
    static register (req, res, next) {
        const { username, email, password } = req.body
        User.create({ username, email, password })
            .then(createdUser => {
                res.status(201).json(createdUser)
            })
            .catch(next)
    }

    static login (req, res, next) {
        const { username, password } = req.body
        User.findOne({ username })
            .then(registeredUser => {
                if(!registeredUser) {
                    res.status(500).json('User not registered. Please register to proceed')
                }
                else {
                    if(registeredUser.password === password) {
                        const token = jwt.sign({ _id: registeredUser._id }, secret)
                        res.status(200).json({ 
                            _id: registeredUser._id,
                            email: registeredUser.email,
                            username: registeredUser.username,
                            token
                         })
                    }
                    else {
                        res.status(404).json('Wrong username/password')
                    }
                }
            })
            .catch(next)
    }

    static showUsers (req, res, next) {
        User.find({})
                .then(users => {
                    res.status(200).json(users)
                })
                .catch(next)
    }
}

module.exports = UserController