const express = require('express')
const router = express.Router()
//token
const jwt = require('jsonwebtoken')
//密钥
const config = require('./secert')
//链接数据库
const sqlFn = require('./mysql')

//1.登录接口
router.post('/login',(req,res)=>{
	let {
		username,
		password
	} = req.body
	//请求数据库
	let sql = "select * from userinfo where username=? and password=?";
	let arr = [username,password]
	sqlFn(sql,arr,result => {
		if(result.length > 0){
			let token = jwt.sign({
				username:result[0].username,
				id:result[0].id,
			},config.jwtSecert,{
				expiresIn:20 * 1
			})
			res.send({
				status:200,
				data:token
			})
		}else{
			res.send({
				status:404,
				msg:"信息错误"
			})
		}
	})
})

//2.注册接口
router.post('/register',(req,res)=>{
	const {
		username,
		password
	} = req.body;
	let sql = "insert into userinfo values(null,?,?)";
	let arr = [username,password]
	sqlFn(sql,arr,(result) => {
		if(result.affectedRows > 0){
			res.send({
				status:200,
				msg:"注册成功"
			})
		}else{
			res.status(401).json({
				error:"用户名密码错误"	
			})
		}
	})
})


//商品列表
router.get('/projectList',(req,res)=>{
	const page = req.query.page || 1
	const sqlLen = "select * from project where id";
	sqlFn(sql,null,data => {
		let len = data.length;
		const sql = "select * from project order by id desc limit 8 offset " + (page - 1) * 8;
		sqlFn(sql,null,result => {
			if(result.length > 0){
				res.send({
					status:200,
					data:result,
					pageSize:8,
					total:len
				})
			}else{
				res.send({
					status:500,
					msg:"暂无数据"
				})
			}
		})
	})
})

module.exports = router