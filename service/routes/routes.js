const router = require('koa-router')()

const SignupController = require('../controllers/signup')

const LoginController = require('../controllers/login')

router.post('/user/signup', SignupController.postSignup)

router.post('/user/login', LoginController.login)


module.exports = router