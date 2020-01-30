const router = require('express').Router()
const userRoute = require('./user')
// const questionRoute = require('./question')
// const answerRoute = require('./answer')

router.get('/', (req, res) => {
  res.send('Welcome to HacktivOverflow API')
})
router.use('/user', userRoute)
// router.use('/questions', questionRoute)
// router.use('/answers', answerRoute)

module.exports = router