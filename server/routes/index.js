const userRoute = require('./userRoute')
const express = require('express')
const router = express.Router()

router.use('/users', userRoute)

module.exports = router