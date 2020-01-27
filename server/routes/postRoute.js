const express = require('express')
const router = express.Router()
const { postController } = require('../controllers')
const authentication = require('../middlewares/authentication')

router.get('/', postController.getPosts)

router.post('/', authentication, postController.addPost)

module.exports = router
