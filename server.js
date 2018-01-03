const Koa = require('koa')
const serve = require('koa-static')
const Router = require('koa-router')
const fs = require('fs')
const path = require('path')

const app = new Koa()
const router = new Router()

router.get('/*', (ctx, next) => {
	ctx.body = fs.readFileSync(path.join(__dirname, '/dist/index.html'), 'utf8')
})

app.use(serve('dist'))
app.use(router.routes())

app.listen(3000, async () => {
	console.log('Server listens on ports 3000')
})