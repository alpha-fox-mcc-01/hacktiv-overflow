const router = require('express').Router()
const User = require('../controllers/User')

router.post('/register', User.register)
router.post('/login', User.login)
router.get('/:id', User.getUserData)

module.exports = router