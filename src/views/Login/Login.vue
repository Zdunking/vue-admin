<template>
    <div class="adminAccuntLogin">
        <el-form :model="form" status-icon :rules="rules" ref="loginForm" label-width="80px" class="login-box">
            <h3 class="login-title">欢迎登录</h3>
            <el-form-item label="手机号" prop="username">
                <el-input type="text" placeholder="请输入账号" v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit('loginForm')" :loading="logining">登录</el-button>
            </el-form-item>
        </el-form>
        <!--用来展示路由组件-->
        <router-view />
    </div>
</template>

<script>
export default {
    name: "adminLogin",
    props: {
        msg: String
    },
    data() {
        return {
            logining: false,
            form: {
                username: '',
                password: ''
            },
            // 表单验证，需要在 el-form-item 元素中增加 prop 属性
            rules: {
                username: [
                    { required: true, message: '账号不可为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不可为空', trigger: 'blur' }
                ]
            }

        };
    },
    computed: {
    },
    methods: {
        onSubmit(formName) {
            // 为表单绑定验证功能
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.logining = true,
                        console.log(this.form.username)
                    console.log(this.form.password)
                    // axios.post("http://localhost:8080/").then(res => {//
                    // console.log(res);
                    this.logining = false;
                    console.log('submit!');
                    this.$router.push("/HelloWorld");
                    // })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },

    }
}

</script>


<style scoped>
.login-box {
    border: 1px solid #DCDFE6;
    width: 350px;
    margin: 180px auto;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
}

.login-title {
    text-align: center;
    margin: 0 auto 40px auto;
    color: #303133;
}
</style>

