const router = require('koa-router')()

const controller = require('../controllers/signup')


router.post('/signup', controller.postSignup)

module.exports = router