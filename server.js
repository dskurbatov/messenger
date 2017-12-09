const Koa = require('koa')

const app = new Koa()

app.use(async ctx => ctx.body = 'Hello World')

app.listen(3000, () => {
	console.log('Server listens on ports 3000')
})