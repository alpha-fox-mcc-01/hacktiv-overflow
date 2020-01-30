const express = require('express')
const router = express.Router()
const QuestionController = require('../controllers/question')
const authentication = require('../middlewares/authentication')

router.get('/', QuestionController.getAllQuestion)
router.get('/:id', QuestionController.getQuestionById)
router.post('/', authentication, QuestionController.createQuestion)

module.exports = router