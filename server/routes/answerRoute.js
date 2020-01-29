const express = require('express')
const router = express.Router()
const { answerController } = require('../controllers')

router.get('/', answerController.getAnswers)

router.get('/me', answerController.getUserAnswers)

router.post('/', answerController.writeAnswer)

router.put('/:id', answerController.editAnswer)

router.patch('/:id/vote', answerController.voteAnswer)
module.exports = router