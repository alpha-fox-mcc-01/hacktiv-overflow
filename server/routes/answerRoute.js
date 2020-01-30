const express = require('express')
const router = express.Router()
const { answerController } = require('../controllers')
const authentication = require('../middlewares/authentication')
const answerAuthorization = require('../middlewares/answerAuthorization')

router.get('/', answerController.getAnswers)

router.get('/me', authentication, answerController.getUserAnswers)

router.post('/', authentication, answerController.writeAnswer)

router.get('/:id', authentication, answerController.getOneAnswer)

router.put('/:id', authentication, answerAuthorization, answerController.editAnswer)

router.patch('/:id/vote', authentication, answerController.voteAnswer)
module.exports = router