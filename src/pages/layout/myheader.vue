<template>
  <div class="header">
	  <!-- <el-button @click="change">切换</el-button> -->
	  <!-- <i @click="change" class="iconfont icon-right-indent" v-show="isCollapse"></i>
	  <i @click="change" class="iconfont icon-left-indent" v-show="!isCollapse"></i> -->

	  <i @click="change" class="iconfont" :class="{'icon-right-indent':isCollapse}"></i>
	  <i @click="change" class="iconfont" :class="{'icon-left-indent':!isCollapse}"></i>
  </div>
</template>

<script>
export default {
    props: ["isCollapse"],
	data(){
		return{
		}
	},
	methods: {
		change(){
			this.$bus.$emit("changeCollapse",this.isCollapse);
		}
	}
}
</script>

<style lang='less' scoped>
.header{
	padding-left: 8px;
	height: 40px;
	color: #ffffff;
	background: rgb(67, 184, 231);
	line-height: 40px;
	overflow: hidden;
	.iconfont{
		font-size: 25px;
	}
}
</style>