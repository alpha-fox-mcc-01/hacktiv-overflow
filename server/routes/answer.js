const express = require('express')
const router = express.Router()
const answerController = require('../controllers/answerController')
const authentication = require('../middlewares/authentication')

router.get('/me', authentication, answerController.fetchMyAnswers )

// :id refers to questionId
router.get('/:id', answerController.fetchAnswers)

router.use(authentication)

// :id refers to answer id
router.post('/:id', answerController.postAnswer)
router.put('/:id', answerController.editAnswer)

module.exports = router