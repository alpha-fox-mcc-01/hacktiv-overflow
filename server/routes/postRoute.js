const router = require('express').Router()

const authenticate = require('../middlewares/authentication')
const authorize = require('../middlewares/authorizationPost')
const PostController = require ('../controllers/postController')

router.get('/comment', PostController.getComment)
router.post('/comment', authenticate, PostController.postComment)
router.patch('/comment', authenticate, PostController.likeComment)
router.get('/comment/:postId', PostController.getComment)

router.patch('/vote',authenticate, PostController.votePost)

router.post('/newpost', authenticate, PostController.newPost)
router.put('/edit',authenticate, authorize, PostController.edit)
router.delete('/',authenticate, authorize, PostController.delete)

router.get('/mine', authenticate, PostController.fetchMine)
router.get('/', PostController.fetchPosts)
router.get('/:postId', PostController.fetchOne)


module.exports = router