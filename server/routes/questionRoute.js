const express = require('express')
const router = express.Router()
const { questionController } = require('../controllers')
const questionAuthorization = require('../middlewares/questionAuthorization')

router.get('/', questionController.getQuestions)

router.get('/me', questionController.getUserQuestions)

router.post('/', questionController.addQuestion)

router.put('/:id', questionAuthorization, questionController.editQuestion)

router.delete('/:id', questionAuthorization, questionController.deleteQuestion)

router.patch('/:id/vote', questionController.voteQuestion)
module.exports = router
