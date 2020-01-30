const express = require('express')
const router = express.Router()
const users = require('./users')
const questions = require('./questions')

router.use('/users', users)
router.use('/questions', questions)


module.exports = router