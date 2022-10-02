<template>
  <div class="content">
    <!-- 搜索区域 -->
    <div class="header">
      <el-input @change="searchArticle" v-model="input" placeholder="请输入内容"></el-input>
      <el-button type="primary">查询</el-button>
      <el-button type="primary">
        <router-link to="/addArticle" style="color:#fff">添加</router-link>
      </el-button>
    </div>
    <!-- 表格区域展示 -->
    <div class="wrapper">
      <el-table height="250" border :data="tableData" stripe style="width: 100%">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="id" label="文案id" width="100"></el-table-column>
        <el-table-column prop="title" label="文案名称" width="180" show-overflow-tooltip></el-table-column>
        <el-table-column prop="classify" label="文案类型" width="120"></el-table-column>
        <el-table-column prop="area" label="所属国家或地区" width="120"></el-table-column>
        <el-table-column prop="language" label="语言" width="120"></el-table-column>
        <el-table-column prop="updateTime" label="更新时间" width="120"></el-table-column>
        <el-table-column prop="publishTime" label="发布时间" width="120"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <Pagination :total="total" :pageSize="pageSize" @changePage="changePage" />
  </div>
</template>
<script>
import Pagination from "../../../components/common/Pagination.vue";
export default {
  data() {
    return {
      input: "",
      tableData: [],
      total: 10,
      pageSize: 1,
    };
  },
  methods: {
    //   编辑事件
    handleEdit() {},
    //   删除事件
    handleDelete() {},
    changePage(num) {
      this.http(num);
    },
    //文案列表获取
    http(page) {
      //获取文章列表接口调用
      this.$api.getArticleList({
        //传参
        page,
      });
    },
    searchArticle(val) {
      this.$api
        .getSearch({
          search: val,
        })
        .then((res) => {
          console.log("搜索---", res.data);
          if (res.data.status === 200) {
            this.tableData = res.data.data;
          } else {
            this.tableData = [];
          }
        });
    },
  },
  components: {
    Pagination,
  },
  created() {
    this.http(1);
  },
};
</script>

<style lang="less" scoped>
.content {
  margin: 20px;
}
.header {
  display: flex;
  .button {
    margin-left: 20px;
  }
}
.wrapper {
  margin: 20px;
}
</style>
