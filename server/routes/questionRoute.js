const express = require('express')
const router = express.Router()
const { questionController } = require('../controllers')
const questionAuthorization = require('../middlewares/questionAuthorization')
const authentication = require('../middlewares/authentication')
router.get('/', questionController.getQuestions)

router.post('/', authentication, questionController.addQuestion)

router.get('/me',  authentication, questionController.getUserQuestions)

router.get('/tags', questionController.getTags)

router.get('/tags/:tag', questionController.getTagQuestions)

router.get('/:id', questionController.getOneQuestion)

router.put('/:id', authentication, questionAuthorization, questionController.editQuestion)

router.delete('/:id', authentication, questionAuthorization, questionController.deleteQuestion)

router.patch('/:id/vote', authentication, questionController.voteQuestion)

module.exports = router
