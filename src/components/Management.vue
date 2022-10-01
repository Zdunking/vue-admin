<template>
    <div>
        <div>

        </div>
        <div>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                        <el-menu-item index="2-4-2">选项2</el-menu-item>
                        <el-menu-item index="2-4-3">选项3</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="3" disabled>消息中心</el-menu-item>
                <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
            </el-menu>
            <div class="line"></div>
            <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                        <el-menu-item index="2-4-2">选项2</el-menu-item>
                        <el-menu-item index="2-4-3">选项3</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="3" disabled>消息中心</el-menu-item>
                <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
            </el-menu>


        </div>

        <!--侧边栏-->
        <div>
            <el-row class="tac">
                <el-col :span="12">
                    <el-menu v-for="(item,idx) in menuName" :key="index" default-active="0"
                        class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                        <el-submenu>
                            <el-menu-item :index="String(subindex)" v-for=" (subitem,subindex) in item.submenu"
                                :key="subindex">

                                {{subitem}}
                            </el-menu-item>
                            <template slot="title">{{item.name}}</template>
                        </el-submenu>
                    </el-menu>
                </el-col>
            </el-row>
        </div>

        <div></div>

    </div>
</template>
<script>
export default {
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1',
            menuName: [
                {

                    name: "用户管理",
                    submenu: ["增加用户", "删除用户", "修改用户权限"]
                },
                {
                    name: "文案管理",
                    submenu: ["上传文案", "删除文案", "修改文案信息"]
                }
            ]
        };
    },
    methods: {
    }
}
</script>