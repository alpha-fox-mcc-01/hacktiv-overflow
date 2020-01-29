const express = require('express')
const router = express.Router()
const { questionController } = require('../controllers')
const authentication = require('../middlewares/authentication')

router.get('/', questionController.getQuestions)

router.get('/me', questionController.getUserQuestions)

router.post('/', questionController.addQuestion)

router.put('/:id', questionController.editQuestion)

router.delete('/:id', questionController.deleteQuestion)

router.patch('/:id/vote', questionController.voteQuestion)
module.exports = router
