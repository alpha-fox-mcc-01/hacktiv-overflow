const jwt = require('jsonwebtoken')
const Question = require('../models/Question')

module.exports = function(req, res, next) {
    const _id = req.params.id
    Question.findOne({ _id })
            .then(found => {
                console.log(found.userId)
                console.log(req.currentUser.id)
                if(String(found.userId) == req.currentUser.id) {
                    next()
                }
                else {
                    res.status(500).json('User not authorized')
                }
            })
            .catch(next)
}
