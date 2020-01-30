const express = require('express')
const router = express.Router()
const { questionController } = require('../controllers')
const questionAuthorization = require('../middlewares/questionAuthorization')

router.get('/', questionController.getQuestions)

router.post('/', questionController.addQuestion)

router.get('/me', questionController.getUserQuestions)

router.get('/tags/:tag', questionController.getTagQuestions)

router.get('/:id', questionController.getOneQuestion)

router.put('/:id', questionAuthorization, questionController.editQuestion)

router.delete('/:id', questionAuthorization, questionController.deleteQuestion)

router.patch('/:id/vote', questionController.voteQuestion)

module.exports = router
