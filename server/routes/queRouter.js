const router = require('express').Router()
const authenticated = require('../middlewares/authenticated')
const queController = require('../controllers/queController')
const authorize = require('../middlewares/authorize')

router.get('/', queController.getAll)
router.get('/user', authenticated, queController.getUserQue)
router.get('/:id', queController.getOne)
router.post('/', authenticated, queController.add)
router.post('/votes/:id', authenticated, queController.addVotes)
router.delete('/:id', authenticated, authorize, queController.remove)
router.put('/:id', authenticated, queController.update)


module.exports = router