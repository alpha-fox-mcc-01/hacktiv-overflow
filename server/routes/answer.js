const express = require('express')
const router = express.Router()
const AnswerController = require('../controllers/answer')
const authentication = require('../middlewares/authentication')

router.post('/', authentication, AnswerController.createAnswer)
router.get('/:id', AnswerController.getAnswerById)

module.exports = router