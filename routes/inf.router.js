const Router = require('express')
const infController = require('../contoller/inf.controller')
const router = new Router()

router.post('/inf', infController.createInf) //Simple CRUD(methods in controller)
router.get('/inf', infController.getInf)
router.get('/inf/:id', infController.getOneInf)
router.put('/inf', infController.updateInf)
router.delete('/inf/:id', infController.deleteInf)


module.exports = router