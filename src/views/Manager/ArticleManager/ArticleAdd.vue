
<template>
  <div class="addArticle">
    <!-- 面包屑 -->
    <div class="title">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path:'/articlemanager'}">素材管理</el-breadcrumb-item>
        <el-breadcrumb-item>素材添加</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- 表单数据 -->
    <div class="myform">
      <el-form
        :model="articleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-row :gutter="20">
          <el-col :span="10">
            <el-form-item label="电影名" prop="filmname">
              <el-input v-model="articleForm.filmname"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="10">
            <el-form-item label="电影别名" prop="alias">
              <el-input v-model="articleForm.alias"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="10">
            <el-form-item label="导演" prop="director">
              <el-input v-model="articleForm.director"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="10">
            <el-form-item label="编辑" prop="scriptwriter">
              <el-input v-model="articleForm.scriptwriter"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="10">
            <el-form-item label="演员" prop="actor">
              <el-input v-model="articleForm.actor"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="5">
            <el-form-item class="grid-content bg-purple" label="语言" prop="language">
              <el-dropdown @command="handleLanCommand">
                <el-button>
                  {{articleForm.language}}
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item
                    class="menutag"
                    v-for="(item,i) in lanList"
                    :key="i"
                    :command="item.LanguageName"
                  >
                    {{item.LanguageName}}
                    <el-button
                      class="mytag el-icon-close"
                      type="text"
                      @click.stop="deleteLanguage(item.ID)"
                    ></el-button>
                  </el-dropdown-item>
                  <el-dropdown-item divided>
                    <el-button @click.stop="showAddLan">
                      <i class="el-icon-circle-plus"></i>新增
                    </el-button>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-form-item>
          </el-col>

          <el-col :span="4">
            <el-form-item class="grid-content bg-purple" label="所属地" prop="area">
              <el-dropdown @command="handleAreaCommand">
                <el-button>
                  {{articleForm.area}}
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-for="(item ,i) in areaList" :key="i" :command="item.AreaName">
                    {{item.AreaName}}
                    <el-button
                      class="mytag el-icon-close"
                      type="text"
                      @click.stop="deleteArea(item.ID)"
                    ></el-button>
                  </el-dropdown-item>
                  <el-dropdown-item divided>
                    <el-button @click.stop="showAddArea">
                      <i class="el-icon-circle-plus"></i>新增
                    </el-button>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item class="grid-content bg-purple" label="类型" prop="classify">
              <el-dropdown @command="handleClassCommand">
                <el-button>
                  {{articleForm.classify}}
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item
                    v-for="(item ,i) in classifyList"
                    :key="i"
                    :command="item.ClassifyName"
                  >
                    {{item.ClassifyName}}
                    <el-button
                      class="mytag el-icon-close"
                      type="text"
                      @click.stop="deleteClass(item.ID)"
                    ></el-button>
                  </el-dropdown-item>
                  <el-dropdown-item divided>
                    <el-button @click.stop="showAddClass">
                      <i class="el-icon-circle-plus"></i>新增
                    </el-button>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item class="grid-content bg-purple" label="图片" prop="image">
              <el-button @click="innerVisibleImg=true">上传图片</el-button>
              <img :src="articleForm.image" height="200px" style="margin-left:10px" stralt />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item class="grid-content bg-purple" label="文案" prop="file">
              <el-button @click="innerVisibleFile=true">上传文案</el-button>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col class="center" :span="3">
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <LanguageAddDialog
      @changeDialogVisible="changeLanDialogVisible"
      @addElement="addLanElement"
      :dialogVisible="LandialogVisible"
    />
    <AreaAddDialog
      @changeDialogVisible="changeAreaDialogVisible"
      @addElement="addAreaElement"
      :dialogVisible="AreadialogVisible"
    />
    <ClassAddDialog
      @changeDialogVisible="changeClassDialogVisible"
      @addElement="addClassElement"
      :dialogVisible="ClassdialogVisible"
    />

    <el-dialog title="上传图片" :visible.sync="innerVisibleImg" width="30%" append-to-body>
      <span>
        <UploadImag @sendImg="sendImg" />
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="innerVisibleImg = false">取 消</el-button>
        <el-button type="primary" @click="innerVisibleImg = false">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="上传文案" :visible.sync="innerVisibleFile" width="30%" append-to-body>
      <span>
        <UploadImag @sendImg="sendImg" />
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="innerVisibleFile = false">取 消</el-button>
        <el-button type="primary" @click="innerVisibleFile = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import LanguageAddDialog from "./LanguageAdd.vue";
import AreaAddDialog from "./AreaAdd.vue";
import ClassAddDialog from "./ClassifyAdd.vue";
import UploadImag from "./UploadImag.vue";
export default {
  components: {
    LanguageAddDialog,
    AreaAddDialog,
    ClassAddDialog,
    UploadImag,
  },
  methods: {
    sendImg(val) {
      console.log(val);
      //   this.imagUrl = val;
    },
    showImg() {
      this.innerVisibleImg = false;
      this.articleForm.image = this.imagUrl;
    },
    changeLanDialogVisible() {
      this.LandialogVisible = !this.LandialogVisible;
    },
    addLanElement(name) {
      this.getLanguageList();
    },

    addClassElement(name) {
      this.getClassList();
    },
    addAreaElement(name) {
      this.getAreaList();
    },
    deleteLanguage(id) {
      this.$api
        .postLanguageDelete({ index: id })
        .then((res) => {
          if (res.status === 200) {
            this.getLanguageList();
          } else {
            this.lanList = [];
          }
        })
        .catch((err) => {
          console.log("delete lan,err:", err);
        });
    },
    deleteArea(id) {
      console.log(id);
      this.$api
        .postAreaDelete({ index: id })
        .then((res) => {
          if (res.status === 200) {
            this.getAreaList();
          } else {
            this.areaList = [];
          }
        })
        .catch((err) => {
          console.log("delete area,err:", err);
        });
    },
    deleteClass(id) {
      this.$api
        .postClassDelete({ index: id })
        .then((res) => {
          if (res.status === 200) {
            this.getClassList();
          } else {
            this.classifyList = [];
          }
        })
        .catch((err) => {
          console.log("delete class,err:", err);
        });
    },
    changeAreaDialogVisible() {
      this.AreadialogVisible = !this.AreadialogVisible;
    },
    changeClassDialogVisible() {
      this.ClassdialogVisible = !this.ClassdialogVisible;
    },
    showAddLan() {
      this.LandialogVisible = true;
    },
    showAddArea() {
      this.AreadialogVisible = true;
    },
    showAddClass() {
      this.ClassdialogVisible = true;
    },
    handleLanCommand(command) {
      this.articleForm.language = command;
    },
    handleAreaCommand(command) {
      this.articleForm.area = command;
    },
    handleClassCommand(command) {
      this.articleForm.classify = command;
    },
    getLanguageList() {
      //获取语言列表
      this.$api
        .getLanguageList()
        .then((res) => {
          console.log("languagelist---", res.data);
          if (res.status === 200) {
            this.lanList = res.data.data;
            this.LanIndex = res.data.index;
          } else {
            this.lanList = [];
          }
        })
        .catch((err) => {
          console.log("getlanlist,err:", err);
        });
    },
    getAreaList() {
      //获取地区列表
      this.$api
        .getAreaList()
        .then((res) => {
          console.log("arealist---", res.data);
          if (res.status === 200) {
            this.areaList = res.data.data;
            this.AreaIndex = res.data.index;
          } else {
            this.areaList = [];
          }
        })
        .catch((err) => {
          console.log("getarealist,err:", err);
        });
    },
    getClassList() {
      //获取分类列表
      this.$api
        .getClassList()
        .then((res) => {
          console.log("classlist---", res.data);
          if (res.status === 200) {
            this.classifyList = res.data.data;
            this.classifyIndex = res.data.index;
          } else {
            this.classifyList = [];
          }
        })
        .catch((err) => {
          console.log("getclasslist,err:", err);
        });
    },
  },
  created() {
    this.getLanguageList();
    this.getAreaList();
    this.getClassList();
  },
  data() {
    return {
      imagUrl: "",
      fileUrl: "",
      innerVisibleFile: false,
      innerVisibleImg: false,
      LanIndex: 0,
      AreaIndex: 0,
      ClassifyIndex: 0,
      LandialogVisible: false,
      AreadialogVisible: false,
      ClassdialogVisible: false,
      lanList: [],
      areaList: [],
      classifyList: [],
      articleForm: {
        filmname: "",
        alias: "",
        director: "",
        scriptwriter: "",
        actor: "",
        image: "",
        file: "",
        classify: "选择分类",
        language: "选择语言",
        area: "选择地区",
      },
      rules: {
        filmname: [
          { required: true, message: "请输入电影名", trigger: "blur" },
          {
            min: 1,
            max: 10,
            message: "长度在 1 到 10 个字符",
            trigger: "blur",
          },
        ],
        alias: [
          { required: false, message: "请输入电影别名", trigger: "blur" },
          {
            min: 1,
            max: 10,
            message: "长度在 1 到 10 个字符",
            trigger: "blur",
          },
        ],
        director: [
          { required: true, message: "请输入电影导演", trigger: "blur" },
          {
            min: 1,
            max: 10,
            message: "长度在 1 到 10 个字符",
            trigger: "blur",
          },
        ],
        scriptwriter: [
          { required: true, message: "请输入电影主编", trigger: "blur" },
          {
            min: 1,
            max: 10,
            message: "长度在 1 到 10 个字符",
            trigger: "blur",
          },
        ],
        actor: [
          {
            required: true,
            message: "请输入电影演员，用，分割",
            trigger: "blur",
          },
          {
            min: 1,
            max: 50,
            message: "长度在 1 到 50 个字符",
            trigger: "blur",
          },
        ],
        image: [{ required: true }],
        area: [{ required: true }],
        language: [{ required: true }],
        classify: [{ required: true }],
        file: [{ required: true }],
      },
    };
  },
};
</script>

<style lang='less' scoped>
.mytag {
  padding-left: 30px;
  text-align: right;
}
.addArticle {
  margin: 20px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.title {
  padding: 10px;
  background: #fff;
  border: 1px solid #eee;
  margin-bottom: 20px;
}
.myform {
  border: 1px solid #eee;
  background: #fff;
  padding: 10px;
  padding-right: 30px;
}
.center {
  margin-left: 350px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #fff;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
</style>
