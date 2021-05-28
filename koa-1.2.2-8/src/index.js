const koa = require('koa')
const path = require('path') //node.js 的 path 模块 
const app = new koa()
const helmet = require('koa-helmet')
const statics = require('koa-static')

const router = require('./routes/routes')

app.use(helmet()) //带着请求头
app.use(statics(path.join(__dirname, '../public')))  //dirname 当前工作目录
app.use(router())

app.listen(3000)
