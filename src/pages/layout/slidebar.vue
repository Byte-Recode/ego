<template>
    <!-- collapse	是否水平折叠收起菜单（仅在 mode 为 vertical 时可用） -->
	<!-- :default-active="$route.path" 动态绑定路由路径，防止刷新路由不变而导航激活的样式回跳 -->
    <el-menu
        :default-active="$route.path"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        router
    >
        <el-menu-item>
            <span slot="title" style="color: orange">Ego后台管理系统</span>
        </el-menu-item>
        <el-menu-item index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/goods">
            <i class="el-icon-document"></i>
            <span slot="title">商品管理</span>
        </el-menu-item>
        <el-menu-item index="/params">
            <i class="el-icon-setting"></i>
            <span slot="title">规格参数</span>
        </el-menu-item>
        <el-menu-item index="/ad">
            <i class="el-icon-setting"></i>
            <span slot="title">广告分类</span>
        </el-menu-item>
        <el-submenu index="/order">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">订单管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/order/order-list">
                    <i class="el-icon-location"></i>
                    <span slot="title">订单列表</span>
                </el-menu-item>
                <el-menu-item index="/order/order-back">
                    <i class="el-icon-location"></i>
                    <span slot="title">退货管理</span>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {
    props: ["isCollapse"],
    data() {
        return {
            //isCollapse:false,
        };
    },
};
</script>

<style lang='less' scoped>
.el-menu-vertical-demo {
    border: none;
    &:not(.el-menu--collapse) {
        width: 200px;
        border: none;
        min-height: 400px;
    }
    &::after {
        clear: both;
        display: block;
        content: "";
    }
}
</style>