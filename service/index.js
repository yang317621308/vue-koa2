const Koa = require('koa')
const koaRouters = require('./routes/routes')
const bodyParser = require('koa-bodyparser')
const router = require('koa-router')
let app = new Koa()

app.use(bodyParser())

app.use(require('./routes/siginup.js').routes())

app.listen(3000)