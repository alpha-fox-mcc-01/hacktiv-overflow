const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user')
const authentication = require('../middlewares/authentication')

router.post('/register', UserController.register)
router.post('/login', authentication, UserController.login)
module.exports = router