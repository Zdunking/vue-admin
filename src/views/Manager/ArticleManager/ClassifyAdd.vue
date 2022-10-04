<template>
  <div>
    <el-dialog :before-close="handleClose" title="新增地区" :visible.sync="dialogVisible" width="30%">
      <el-form :model="ClassForm" ref="ClassForm" label-width="100px" class="demo-ruleForm">
        <el-form-item
          label="名称"
          prop="name"
          :rules="[
      { required: true, message: '名称不能为空'},
      { type: 'string', message: '名称必须为字符串'}
    ]"
        >
          <el-input v-model.number="ClassForm.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="resetForm(ClassForm)">取 消</el-button>
        <el-button type="primary" @click="submitForm(ClassForm)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["dialogVisible"],
  data() {
    return {
      ClassForm: {
        name: "",
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$emit("changeDialogVisible");
      this.$api.postClassAdd(formName).then((res) => {
        console.log("classAdd---", res);
        if (res.status === 200) {
          this.$emit("changeDialogVisible");
          this.$emit("addElement");
          alert("success!");
          this.resetForm(formName);
        } else {
          this.$emit("changeDialogVisible");
          alert("failed");
          this.resetForm(formName);
        }
      });
    },
    resetForm(formName) {
      this.$emit("changeDialogVisible");
      this.ClassForm = {};
    },
    handleClose() {
      this.$confirm("确认关闭？")
        .then((_) => {
          this.resetForm();
        })
        .catch((_) => {});
    },
  },
};
</script>

<style>

</style>