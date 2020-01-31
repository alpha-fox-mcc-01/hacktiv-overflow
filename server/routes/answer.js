const express = require('express')
const router = express.Router()
const answerController = require('../controllers/answerController')
const { authentication, authorizationAnswer } = require('../middlewares/index')
router.get('/me', authentication, answerController.fetchMyAnswers )

// :id refers to questionId
router.get('/:id', answerController.fetchAnswers)

router.use(authentication)
router.patch('/:id', answerController.voteAnswer)

// :id refers to answer id
router.post('/:id',answerController.postAnswer)
router.put('/:id', authorizationAnswer, answerController.editAnswer)
router.delete('/:id', authorizationAnswer, answerController.deleteAnswer)
module.exports = router