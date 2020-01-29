const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')

router.post('/', postController.addQuestion)
router.get('/', postController.showAllQuestion)
router.get('/:id', postController.showOneQuestion)
router.delete('/:id', postController.deleteQuestion)

module.exports = router