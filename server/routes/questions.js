const express = require('express')
const router = express.Router()
const QuestionController = require('../controllers/QuestionController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.post('/post', authentication, QuestionController.postQuestion)
router.get('/', QuestionController.getAllQuestions)
router.get('/:id', authentication, QuestionController.getOneQuestion)
router.delete('/:id', authentication, authorization, QuestionController.deleteQuestion)
router.put('/:id', authentication, authorization, QuestionController.updateQuestion)

module.exports = router