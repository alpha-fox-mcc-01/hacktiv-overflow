const express = require('express')
const router = express.Router()
const { answerController } = require('../controllers')
const answerAuthorization = require('../middlewares/answerAuthorization')

router.get('/', answerController.getAnswers)

router.get('/me', answerController.getUserAnswers)

router.post('/', answerController.writeAnswer)

router.get('/:id', answerController.getOneAnswer)

router.put('/:id', answerAuthorization, answerController.editAnswer)

router.patch('/:id/vote', answerController.voteAnswer)
module.exports = router