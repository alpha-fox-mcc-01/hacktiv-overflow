const express = require('express')
const router = express.Router()
const { answerController } = require('../controllers')

router.get('/', answerController.getAnswers)

router.post('/', answerController.writeAnswer)

router.put('/:id', answerController.editAnswer)
module.exports = router