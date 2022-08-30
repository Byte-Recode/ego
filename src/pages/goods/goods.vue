<template>
    <div class="outer">
        <!-- 搜索 -->
        <header>
            <el-input
                v-model="input"
                placeholder="请输入内容"
                size="small"
            ></el-input>
            <el-button type="primary" size="small">查询</el-button>
            <el-button type="primary" size="small">添加</el-button>
        </header>
        <!-- 表格区域展示视图数据 -->
        <section>
            <el-table :data="tableData" style="width: 100%" border>
                <el-table-column type="selection" width="55"> </el-table-column>
                <el-table-column prop="ID" label="商品ID" width="100">
                </el-table-column>
                <el-table-column prop="name" label="商品名称" width="100" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="price" label="商品价格" width="100">
                </el-table-column>
                <el-table-column prop="quantity" label="商品数量" width="100">
                </el-table-column>
                <el-table-column prop="class" label="商品类目" width="100">
                </el-table-column>
                <el-table-column prop="pic" label="商品图片" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="feature" label="商品卖点" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="describe" label="商品描述" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="operation" label="操作" width="150">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)"
                            >编辑</el-button
                        >
                        <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)"
                            >删除</el-button
                        >
                    </template>
                </el-table-column>
            </el-table>
        </section>
        <!-- 分页 -->
        <footer>
			<myPageNation :total="total" :pageSize="pageSize"></myPageNation>
		</footer>
    </div>
</template>

<script>
import myPageNation from '../../components/myPageNation'
import Data from '../../../server/data.js'
export default {
	components:{
		myPageNation
	},
    data() {
        return {
            input: "",
            tableData: Data.tableData.data1,
			total:Data.total,
			pageSize:Data.pageSize
        };
    },
    methods: {
        handleEdit() {},
        handleDelete() {},
    },
	mounted(){
		this.$bus.$on("changePage",(page)=>{
			if(page === 1) this.tableData = Data.tableData.data1;
			if(page === 2) this.tableData = Data.tableData.data2
		})
	}
};
</script>

<style lang="less" scoped>
.outer {
    padding: 20px;
    header {
        display: flex;
        button {
            margin-left: 20px;
        }
    }
    section {
        margin-top: 20px;
    }
	footer{
		margin-top: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>