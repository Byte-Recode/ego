<template>
    <div class="outer">
        <!-- 搜索 -->
        <header>
			<el-input v-model="input" placeholder="请输入内容" size='small'></el-input>
			<el-button type="primary" size='small'>查询</el-button>
			<el-button type="primary" size='small'>添加</el-button>
		</header>
        <!-- 表格区域展示视图数据 -->
        <section></section>
        <!-- 分页 -->
        <footer></footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: "",
        };
    },
};
</script>

<style lang="less" scoped>
.outer{
	padding: 20px;
	header{
		display: flex;
		button{
			margin-left: 20px;
		}
	}
}
</style>