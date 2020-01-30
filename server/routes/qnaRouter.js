const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')
const multer = require('multer')

router.get('/', postController.showAllQuestion)
router.get('/:id', postController.showOneQuestion)
router.delete('/:id', postController.deleteQuestion)
router.post('/wopic', postController.addQuestionWithoutPic)
router
  .route('/')
  .post(multer({ dest: 'temp/', limits: { fieldSize: 3 * 1024 * 1024 } }).single('imageUrl'), postController.addQuestion)
router.post('/answer', postController.addAnswer)
router.post('/vote', postController.addVote)
// router.post('/canvote', postController.canVote)


module.exports = router