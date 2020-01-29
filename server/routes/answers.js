const express = require ('express')
const router = express.Router()
const AnswerController = require ('../controllers/answerController')
const authentication = require ('../middlewares/authentication')

router.get('/', AnswerController.getAll)
router.post('/', AnswerController.add)
router.post('/upvote/:answerId', authentication, AnswerController.upvote)
router.post('/downvote/:answerId', authentication, AnswerController.downvote)
router.put('/:questionId', authentication, AnswerController.update)

module.exports = router