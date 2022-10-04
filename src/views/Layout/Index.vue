<template>
    <div class="layout">

        <Mymenu class="menu" />
        <Content class="content" />
    </div>

</template>

<script>
import Mymenu from './Mymenu.vue';
import Content from './Content.vue';
export default {
    components: { Mymenu, Content }
}

</script>

<style lang='less' scoped>
.layout {
    display: flex;

    .menu {
        width: 200px;
        min-height: 500px;
        background: #666;
    }

    .content {
        flex: 1;
    }
}
</style>

