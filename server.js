const Koa = require('koa')
const serve = require('koa-static')

const app = new Koa()

app.use(serve('dist'))

app.listen(3000, async () => {
	console.log('Server listens on ports 3000')
})