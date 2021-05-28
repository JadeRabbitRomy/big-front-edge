const Router = require('koa-router')


const userController = require('../api/userController')

const router = new Router()


router.post('/userController', userController)

module.exports = router