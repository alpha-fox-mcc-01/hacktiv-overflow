const express = require('express')
const router = express.Router()
const QuestionController = require('../controllers/question')
const authentication = require('../middlewares/authentication')

router.post('/', authentication, QuestionController.createQuestion)
router.get('/', QuestionController.getAllQuestion)

module.exports = router