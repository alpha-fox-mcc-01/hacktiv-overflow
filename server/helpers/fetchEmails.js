const { User } = require('../models/index')


module.exports = function (req, res, next) {
    let listEmails = []
    User.find() 
        .then( users => {
            users.forEach( user => {
                listEmails.push(user.email)
            } )
            return listEmails
        })
        .catch(err => {
            next(err)
        } )
}