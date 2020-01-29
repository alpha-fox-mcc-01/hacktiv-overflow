const userRoute = require('./userRoute')
const questionRoute = require('./questionRoute')
const answerRoute = require('./answerRoute')
const express = require('express')
const router = express.Router()

router.use('/users', userRoute)

router.use('/questions', questionRoute)

router.use('/answers', answerRoute)
module.exports = router