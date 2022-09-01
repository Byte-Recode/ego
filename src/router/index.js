import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../pages/layout'
import Home from '../pages/home'
import login from '../pages/login'

const Goods = () =>import('../pages/goods/goods.vue') 
const Order = () =>import('../pages/order/order.vue') 
const Ad = () =>import('../pages/ad/ad.vue') 
const Params = () =>import('../pages/params/params.vue') 
const OrderList = () =>import('../pages/order/orderList/orderList.vue') 
const OrderBack = () =>import('../pages/order/orderBack/orderBack.vue') 

const AddGoods = () =>import("../pages/goods/addGoods.vue")

Vue.use(VueRouter)

const routes = [
	{
		path: '',
		name: 'layout',
		component: layout,
		children: [
			{
				path: '/',
				name: 'Home',
				component: Home
			},
			{
				path: '/goods',
				name: 'Goods',
				component: Goods
			},
			{
				path: '/AddGoods',
				name: 'AddGoods',
				component: AddGoods
			},
			{
				path: '/order',
				name: 'Order',
				component: Order,
				redirect:'/order/order-list',
				children: [
					{
						path:'order-list',
						component:OrderList
					},
					{
						path:'order-back',
						component:OrderBack
					}
				]
			},
			{
				path: '/ad',
				name: 'Ad',
				component: Ad
			},
			{
				path: '/params',
				name: 'Params',
				component: Params
			},
		]
	},
	{
		path: '/login',
		name: 'login',
		component: login
	}
]
const router = new VueRouter({
	routes
})
export default router