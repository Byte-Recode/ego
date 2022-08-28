//搭建express服务
const express = require('express')
const app = express()
//post请求表单数据
app.use(express.urlencoded({
	extended:true
}))

const router = require('./router')
//创建路由规则
app.use('/',router)
app.listen(8081,()=>{
	console.log(8081);
})