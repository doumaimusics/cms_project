<template>
    <div id="enrol">
        <!-- 导航 -->
        <div class="nav_tab" :class="{tab1:tabUrl == 2,tab2:tabUrl == 3,tab3:tabUrl == 4,}">
           <div class="tab" v-for="(v,index) in 4" @click="tab(v)"></div>
        </div>
        <!-- 第一页 -->
        <tab-oew v-if="tabUrl == 1"></tab-oew>
        <!-- 第二页 -->
        <tab-two v-else-if="tabUrl == 2"></tab-two>
        <!-- 第三页 -->
        <tab-three v-else-if="tabUrl == 3"></tab-three>
        <!-- 第四页 -->
        <tab-four v-else-if="tabUrl == 4"></tab-four>
    </div>
</template>

<script>
import tabOew from './tabTemplate/tab1';
import tabTwo from './tabTemplate/tab2';
import tabThree from './tabTemplate/tab3';
import tabFour from './tabTemplate/tab4';
export default {
    data(){
        return {
            tabUrl:1
        }
    },
    methods: {
        tab(i){
           this.tabUrl = i;
        }
    },
    components:{
        tabOew,
        tabTwo,
        tabThree,
        tabFour
    }
}
</script>

<style lang="scss" scoped>
    #enrol{
        position: relative;
        overflow: hidden;
        width: 100%;
        .nav_tab{
            width: 100%;
            height: 1.253333rem;
            position: fixed;
            top: 0;
            left: 0;
            background: url(https://aliyunsso.edspay.com/web/wx/activity/supervise/wx_topTab1.png?v=1.1) no-repeat;
            background-size: 100% 100%;
            .tab{
                float: left;
                height: 100%;
                width: 2.411111rem;
            }
            .tab:nth-child(2){
                width: 2.353333rem;
            }
            .tab:nth-child(3){
                width: 2.487777rem;
            }
            .tab:nth-child(4){
                width: 2.722222rem;
            }
        }
        .tab1{
            background: url(https://aliyunsso.edspay.com/web/wx/activity/supervise/wx_topTab2.png?v=1.1) no-repeat;
            background-size: 100% 100%;
        }
        .tab2{
            background: url(https://aliyunsso.edspay.com/web/wx/activity/supervise/wx_topTab3.png?v=1.1) no-repeat;
            background-size: 100% 100%;
        }
        .tab3{
            background: url(https://aliyunsso.edspay.com/web/wx/activity/supervise/wx_topTab4.png?v=1.1) no-repeat;
            background-size: 100% 100%;
        }
    }
</style>