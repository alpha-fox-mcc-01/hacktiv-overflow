const userRoute = require('./userRoute')
const postRoute = require('./postRoute')
const express = require('express')
const router = express.Router()

router.use('/users', userRoute)

router.use('/posts', postRoute)
module.exports = router