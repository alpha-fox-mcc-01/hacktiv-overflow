const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')

router.post('/post', postController.addQuestion)
router.get('/post', postController.showAllQuestion)
router.get('/post/:id', postController.showOneQuestion)
router.delete('/post/:id', postController.deleteQuestion)

module.exports = router