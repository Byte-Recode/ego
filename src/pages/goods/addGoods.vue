<template>
    <div class="outer">
        <div class="tittle">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }"
                    >首页</el-breadcrumb-item
                >
                <el-breadcrumb-item :to="{ path: '/goods' }"
                    >商品管理</el-breadcrumb-item
                >
                <el-breadcrumb-item>商品添加</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <h3>商品添加</h3>
        <div class="form">
            <el-form ref="form" :model="form" label-width="80px">
				<el-form-item label="类目选择">
                    <el-button>类目选择</el-button>
                </el-form-item>
                <el-form-item label="商品名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit"
                        >立即创建</el-button
                    >
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: "",
                region: "",
                date1: "",
                date2: "",
                delivery: false,
                type: [],
                resource: "",
                desc: "",
            },
        };
    },
    methods: {
        onSubmit() {
            console.log("submit!");
        },
    },
};
</script>

<style lang="less" scoped>
.outer {
    margin: 10px;
    .tittle {
        padding: 10px;
        background: #ffffff;
        border: 1px solid #f4f4f4;
        border-radius: 5px;
        font-size: 14px;
		margin-bottom: 10px;
    }
	h3{
		margin-left: 10px;
	}
    .form {
        background: #ffffff;
        border: 1px solid #f4f4f4;
        border-radius: 5px;
		margin-top: 10px;
		padding-top: 15px;
		padding-right: 10px;
    }
}
</style>