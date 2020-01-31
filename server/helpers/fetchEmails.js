const { User } = require('../models/index')


module.exports = new Promise ((resolve, reject) => {
    User.find() 
        .then(users => {
            let listEmails = []
                users.forEach( user => {
                    listEmails.push(user.email)
                } )
                resolve(listEmails)
            })
        .catch(err => {
            reject(err)
        })
})