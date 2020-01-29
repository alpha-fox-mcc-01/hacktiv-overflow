const express = require('express')
const router = express.Router()
const answerController = require('../controllers/answerController')

router.post('/', answerController.addAnswer)
router.get('/', answerController.showAllAnswer)
router.get('/:id', answerController.showAnswerByPost)

module.exports = router