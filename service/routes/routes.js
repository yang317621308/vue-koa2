const router = require('koa-router')()

const SignupController = require('../controllers/signup')

const LoginController = require('../controllers/login')

router.post('/api/user/signup', SignupController.postSignup)

router.post('/api/user/login', LoginController.login)


module.exports = router