const userRoute = require('./userRoute')
const questionRoute = require('./questionRoute')
const answerRoute = require('./answerRoute')
const express = require('express')
const router = express.Router()
const authentication = require('../middlewares/authentication')

router.use('/users', userRoute)

router.use('/questions', authentication, questionRoute)

router.use('/answers', authentication, answerRoute)
module.exports = router