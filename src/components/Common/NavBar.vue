<template>
    <div  class="title">
        <h1 @click="goback" class="h11"><返回</h1>
        <h1 class="h12">{{title}}</h1>
    </div>
</template>
<script>
export default {
    name:'nav-bar',
    props:['title'],
    methods:{
        goback(){
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="scss" scoped>
    .title{
        width: 100%;
        height: 40px;
        h1{
            float: left;
            margin-right: 20px;
        }
        .h11{
            color: #e5e5e5;
        }
    }
</style>

