<template>
  <div class="layout">
	  <!-- 左侧导航 -->
		<slidebar class="menu" :isCollapse='isCollapse'></slidebar>
		<!-- 右侧内容 -->
		<div class="main-content">
			<myheader @changeCollapse='changeCollapse' :isCollapse='isCollapse'></myheader>
			<mycontent></mycontent>
		</div>
  </div>
</template>

<script>
import slidebar from './slidebar'
import myheader from './myheader'
import mycontent from './mycontent'

export default {
	name:'',
	components:{
		slidebar,
		myheader,
		mycontent
	},
	data(){
		return{
			isCollapse:false//展开
		}
	},
	methods:{
		changeCollapse(){
			this.isCollapse = !this.isCollapse;
		}
	}
}
</script>

<style lang='less' scoped>
.layout{
	height: 100%;
	.menu{
		float: left;
		background: #999999;
		height: 100%;
	}
}
</style>