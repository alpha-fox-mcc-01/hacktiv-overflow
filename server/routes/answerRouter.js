const express = require('express')
const router = express.Router()
const answerController = require('../controllers/answerController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.post('/', authentication, answerController.addAnswer)
router.get('/', answerController.showAllAnswer)
router.get('/:id', answerController.showAnswerByPost)

module.exports = router