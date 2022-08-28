import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/reset.css'


Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
	beforeCreate(){
		Vue.prototype.$bus = this;//安装全局事件总线,适用于组件跨层级通信
	}
}).$mount('#app')
