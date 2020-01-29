const express = require('express')
const router = express.Router()
const questionController = require('../controllers/questionController')
const { authentication, authorizationQuestion } = require('../middlewares/index')

router.get('/', questionController.fetchQuestions)
router.use(authentication)
router.post('/', questionController.postQuestion)
router.get('/me', questionController.fetchMine)

router.put('/:id', authorizationQuestion, questionController.editQuestion)
router.delete('/:id', authorizationQuestion, questionController.deleteQuestion)

module.exports = router