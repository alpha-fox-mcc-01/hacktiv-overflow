const { userController } = require('../controllers')
const express = require('express')
const router = express.Router()

router.post('/signup', userController.newUser)

router.post('/signin', userController.logUser)
module.exports = router