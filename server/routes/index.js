const router = require('express').Router()
const userRouter = require('./userRouter')
const queRouter = require('./queRouter')
const answerRouter = require('./answerRouter')


router.use('/user', userRouter)
router.use('/question', queRouter)
router.use('/answer', answerRouter)

module.exports = router