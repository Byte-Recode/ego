<template>
    <el-pagination
        background
        layout="total, prev, pager, next, jumper"
        :total="total"
        :page-size="pageSize"
		@current-change="changePage"
    >
    </el-pagination>
</template>

<script>
export default {
    props: {
        total: {
            type: Number,
            default: 100,
        },
        pageSize: {
            type: Number,
            default: 10,
        },
    },
	methods:{
		changePage(page){
			this.$bus.$emit("changePage", page)
		}
	}
};
</script>

<style lang="less" scoped>
</style>