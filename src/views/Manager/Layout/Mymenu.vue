<template>
  <div>
    <el-menu
      default-active="/"
      class="el-menu-vertical-demo"
      background-color="#1b3554"
      text-color="#fff"
      active-text-color="#409EFF"
      router
      :collapse="isCollapse"
    >
      <el-menu-item>
        <span slot="title">电影梦工厂</span>
      </el-menu-item>
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/usermanager">
        <i class="el-icon-document"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="/articlemanager">
        <i class="el-icon-setting"></i>
        <span slot="title">文章管理</span>
      </el-menu-item>

      <el-submenu index="/ordermanager">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/ordermanager/order-list">订单列表</el-menu-item>
          <el-menu-item index="/ordermanager/order-back">退货管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/personalcenter">
        <i class="el-icon-setting"></i>
        <span slot="title">个人中心</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: ["isCollapse"],
  data() {
    return {};
  },
};
</script>

<style lang='less' scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
