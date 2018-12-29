<template>
    <div class="wxFooter">
        <ul>
            <li v-for="(item, index) in bottomLits" :key="index">
                <router-link :to="{path:item.url}">
                    <i :style="{background:'url('+item.img+')'}"></i>
                    <p>{{item.text}}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
           bottomLits:[
               {
                  text:'首页',
                  img:require('../assets/img/tab-bar-home-n.png'),
                  url:'/home'
               },
               {
                  text:'会员',
                  img:require('../assets/img/member.png'),
                  url:'/member'
               },
               {
                  text:'购物车',
                  img:require('../assets/img/tab-bar-car-n.png'),
                  url:'/shopcart'
               },
               {
                  text:'搜索',
                  img:require('../assets/img/tab_bar_user_icon_no.png'),
                  url:'/seach'
               },
           ]
        }
    }
}
</script>

<style lang="scss">
    .wxFooter{
        border-top: 1px solid #EBEBEB;
        position: fixed;
        bottom: 0;
        left: 0;
        height: 1.333333rem;
        width: 100%;
        text-align: center;
        font-size: 0.32rem;
        line-height: .32rem;
        color: #BCBCBC;
        margin-top: .02rem;
        background:#fff;
        z-index: 990;
        box-shadow: 0 0 12px 0 rgba(0,0,0,0.12);
        ul{
            display: table;
            width: 100%;
            li{
                padding-top: 0.133333rem;
                display: table-cell;
                width: 25%;
                i{
                    width: .746667rem;
                    height: .746667rem;
                    display: block;
                    margin: 0 auto;
                    background-size:.746667rem!important;
                    background-repeat: no-repeat;
                }
                p{
                    text-align: center;
                }
            }
        }
    } 
</style>
