const express = require('express')
const router = express.Router()
const AnswerController = require('../controllers/answer')

router.post('/', AnswerController.createAnswer)

module.exports = router