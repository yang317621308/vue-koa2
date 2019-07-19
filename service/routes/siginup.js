const router = require('koa-router')();
const controller = require('../controllers/signup')
console.log(controller)
    // 注册页面
    // router.get('/signup', controller.getSignup)
    // post 注册
router.post('/signup', controller.postSignup)

module.exports = router