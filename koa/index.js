const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')
const koaBody = require('koa-body')
const json = require('koa-json')

const app = new Koa()
const router = new Router()

//发送一个请求，request，method（get,post），respond 都是什么
//2. api url => function router 是怎么实现的
//3. 上下文，async 是怎么用的


// router.get('/', ctx => {
//     console.log(ctx)//ctx包含了整个app的上下文;
//     console.log(ctx.request);//ctx.request就可以查看到请求的方法，请求的内容
//     ctx.body = 'Hello World!!'
// })

// router.get('/api', ctx => {
//     console.log(ctx)//ctx包含了整个app的上下文;
//     console.log(ctx.request);//ctx.request就可以查看到请求的方法，请求的内容
//     ctx.body = 'Hello api!!'
// })

router.prefix('/api')

router.get('/api', ctx => {
    //get params
    const params = ctx.request.query
    console.log(params);
    console.log(params.name, params.age)
    ctx.body = { name: params.name, age: params.age }
})

router.get('/async', async (ctx) => {

    let result = await new Promise((resolve) => {
        setTimeout(function () {
            resolve('Hello world 2s later!')
        }, 2000)
    })
    ctx.body = result;
})


router.post('/post', async (ctx) => {
    let { body } = ctx.request;
    console.log(body);
    console.log(ctx.request);
    ctx.body = {
        ...body
    }
})

app.use(koaBody());//先处理request请求的数据
app.use(cors());//再解决跨域的请求
app.use(json({ pretty: false, param: 'pretty' }))

app.use(router.routes()).use(router.allowedMethods());//allowedMethods拦截器，拦截应用里没有的请求，返回错误；routes 是添加前面定义路由类里面的方法

app.listen(3000);


//我们有多个路径，不同的路径要执行不同的方法，要实现 web 接口，实现 web 服务器
//需要用 koa 的 router 中间件
//npm install 安装 koa-router  依赖  

