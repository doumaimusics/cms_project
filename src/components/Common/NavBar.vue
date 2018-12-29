<template>
    <div class="nav">
        <div class="return" @click="go"><返回</div>
        <div class="title">{{title}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:['title'],
    methods: {
        go(){
            this.$router.go(-1)
        }
    },
}
</script>

<style lang="scss" scoped>
    .nav{
        width: 100%;
        height: 1.066667rem;
        position: fixed;
        top:0;
        left: 0;
        text-align: center;
        line-height: 1.066667rem;
        background: #fff;
        border-bottom: 1px solid #e5e5e5;
        .return{
           position: absolute;
           left: .266667rem;
           top: 0;
        }
    }
</style>