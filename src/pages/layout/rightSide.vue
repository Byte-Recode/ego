<template>
    <div class="outer">
        <myheader
            :isCollapse="isCollapse"
        ></myheader>
        <mycontent></mycontent>
    </div>
</template>

<script>
import myheader from './myheader'
import mycontent from './mycontent'
export default {
	props:["isCollapse"],
    components: {
        myheader,
        mycontent,
    },
};
</script>

<style lang='less' scoped>
.outer{
	overflow: hidden;
}
</style>