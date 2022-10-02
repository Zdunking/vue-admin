<template>
    <div>
        <div class="header">
            <i v-if='!isCollapse' @click="changeMenu"  class="iconsize el-icon-s-fold"></i>
            <i v-else @click="changeMenu" class="iconsize el-icon-s-unfold"></i>
            顶部区域</div>
    <!-- 内容区---路由出口 -->
    <div class="content">
        <router-view></router-view>
    </div>
    </div>

</template>
    
<script>
export default {
    props:['isCollapse'],
    methods:{
        changeMenu(){
            //点击按钮时需要修改父组件数据
            this.$emit('changeCollapse')
        }
    }
}

</script>
    
<style lang='less' scoped>
.header{
    height: 50px;
    color:#fff;
    background:#1e78bf;
    line-height: 50px;
    .iconsize{
        font-size: 24px;
    }
}
</style>