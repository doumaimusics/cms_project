<template>
    <div id="goodsDetail">
        <nav-bar title="商品详情"></nav-bar>
        <div class="outer-swiper">
            <div class="swiper">
                <my-swipe url="getthumimages/87"></my-swipe>
            </div>
        </div>
        <div class="product_desc">
            <ul>
                <li class="title">{{goodsInfo.title | convertStr(8)}}</li>
                <li class="price_li">
                    市场价:<s>¥{{goodsInfo.market_price}}</s>
                    销售价：<span>¥{{goodsInfo.sell_price}}</span>
                </li>
                <li class="number_li">
                    购买数量：<span>-</span><span>1</span><span>+</span>
                </li>
                <li class="button_box">
                    <div class="left">立即购买</div>
                    <div class="right" @click="insertBall">加入购物车</div>
                </li>
            </ul>
        </div>
        <!-- 购物车数量 -->
        <transition name="ball" @after-enter="afterEnter">
            <div class="ball" v-if="isExist"></div>
        </transition>
       

        <div class="product_props">
             <ul>
                 <li>商品参数：</li>
                 <li>商品货号：{{goodsInfo.goods_no}}</li>
                 <li>库存情况：{{goodsInfo.stock_quantity}}</li>
                 <li>上架时间：{{goodsInfo.add_time | convertTime('YYYY-MM-DD')}}</li>
             </ul>
        </div>
    </div>
</template>

<script>
import navBar from '../Common/NavBar';
import mySwipe from '../Common/mySwipe';
export default {
    data(){
       return {
         isExist:false,   // 小球
         goodsInfo:{}
       }
    },
    methods:{
        insertBall(){
            this.isExist = true;
        },
        afterEnter(){
            this.isExist = false
        }
    },
    created(){
       let imgId = this.$route.params.id;
       this.$axios.get('goods/getinfo/' + imgId)
       .then( res => {
           console.log(res)
           this.goodsInfo = res.data.message[0]
       })
       .catch( err => {
           console.log("商品详情错误")
       })
    },
    components:{
        navBar,
        mySwipe
    }
}
</script>

<style lang="scss" scoped>
    .ball-enter-active{
        animation: bounce-in 1s;
    }
    .ball-leave {
        // 元素进入以后 透明度0,整个动画都是0
        // 元素离开默认是1所有会闪一下
        opacity: 0;
    }
    @keyframes bounce-in{
        0%{
            transform: translate3d(0,0,0);
        }
        50%{
            transform: translate3d(4.75rem,-1rem,0);
        }
        75%{
            transform: translate3d(4.75rem,0,0);
        }
        100%{
            transform: translate3d(4.75rem,18.75rem,0);
        }
    }
    #goodsDetail{
        width: 100%;
        overflow: hidden;
        position: relative;
        margin-bottom: 6.25rem;
        .outer-swiper{
            width: 100%;
            border-bottom: 1px solid #eee; 
        }
        .product_desc{
            padding: 1.25rem;
            ul{
                li{
                    margin-bottom: 1.25rem;
                }
                li.title{
                   color: blue;
                   font-size: 1.875rem;
                   border-bottom: 1px solid #eee;
                }
                li.price_li{
                    span{
                        font-size: 1.25rem;
                        color: red;
                    }
                }
                li.number_li{
                    span{
                        border: 1px solid #eee;
                        padding: .3125rem;
                        margin-right: .625rem;
                    }
                }
                li.button_box{
                    overflow: hidden;
                    div{
                        width: 6.25rem;
                        height: 2.8125rem;
                        float: left;
                        margin-right: .625rem;
                        text-align: center;
                        line-height: 2.8125rem;
                        border-radius: .625rem;
                        color: #fff;
                    }
                    div.left{
                        background: green;
                    }
                    div.right{
                        background: #ff0000;
                    }
                }
            }
        }
        .ball{
            width: 1.875rem;
            height: 1.875rem;
            border-radius: 50%;
            background: #ff0000;
            position: absolute;
            right: 8.25rem;
            top: 27rem;
            text-align: center;
            line-height: 1.875rem;
            color: #333;
        }
        .product_props{
            padding: 1.25rem;
        }
    }
</style>
