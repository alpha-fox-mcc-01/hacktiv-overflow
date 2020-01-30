const express = require ('express')
const router = express.Router()
const QuestionController = require ('../controllers/questionController')
const authentication = require ('../middlewares/authentication')
const authorization = require ('../middlewares/authorization')

router.get('/', QuestionController.getAll)
router.get('/:questionId', QuestionController.getOne)
router.post('/',authentication, QuestionController.add)
router.delete('/:questionId',authentication, authorization, QuestionController.deleteQuestion)
// router.post('/upvote/:questionId', authentication, QuestionController.upvote)
// router.post('/downvote/:questionId', authentication, QuestionController.downvote)
router.patch('/:questionId', authentication, QuestionController.vote)
router.put('/:questionId', authentication, authorization, QuestionController.update)

module.exports = router
