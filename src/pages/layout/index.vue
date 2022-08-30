<template>
    <div class="layout">
        <!-- 左侧导航 -->
        <slidebar class="menu" :isCollapse="isCollapse"></slidebar>
        <!-- 右侧内容 -->
        <rightSide :isCollapse="isCollapse"></rightSide>
    </div>
</template>

<script>
import slidebar from "./slidebar";
import rightSide from "./rightSide";

export default {
    name: "",
    components: {
        slidebar,
        rightSide,
    },
    data() {
        return {
            isCollapse: false, //展开
        };
    },
    mounted() {
        this.$bus.$on("changeCollapse", (isCollapse) => {
            this.isCollapse = !isCollapse;
        });
    },
};
</script>

<style lang='less' scoped>
.layout {
    height: 100%;
	background: #f7f7f7;
    .menu {
        float: left;
        background: #999999;
        height: 100%;
    }
    .main-content {
        float: right;
        width: 100%;
    }
}
</style>