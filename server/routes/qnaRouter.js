const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')
const multer = require('multer')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.get('/', postController.showAllQuestion)
router.get('/:id', postController.showOneQuestion)
router.delete('/:id', authentication, authorization, postController.deleteQuestion)
router.post('/wopic', authentication, postController.addQuestionWithoutPic)
router
  .route('/')
  .post(multer({ dest: 'temp/', limits: { fieldSize: 3 * 1024 * 1024 } }).single('imageUrl'), authentication, postController.addQuestion)
router.post('/answer', authentication, postController.addAnswer)
router.post('/vote', authentication, postController.addVote)

module.exports = router