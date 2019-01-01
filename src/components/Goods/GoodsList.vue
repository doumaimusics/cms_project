<template>
    <div id="goodsList">
        <nav-bar title="商品列表"></nav-bar>
        <!-- 
            :auto-fill="false"  自动帮忙发请求充满父元素
            :bottom-method   函数调用
            :bottom-all-loaded  若为真，则 bottomMethod 不会被再次触发
          -->
        <mt-loadmore :auto-fill="false" :bottom-method="loadBottom" :bottom-all-loaded="isAllLoaded" ref="loadmore">
            <ul>
                <li v-for="(item,index) in goodsList" :key="index">
                    <router-link :to="{name:'goodsDetail',params:{id:item.id}}">
                        <img :src="item.img_url" alt="">
                        <div class="title">{{item.title | convertStr(10)}}</div>
                        <div class="desc">
                            <div class="sell">
                                <span>{{item.sell_price}}</span>
                                <s>{{item.marker_price}}</s>
                            </div>
                            <div class="detail">
                                <div class="hot">热卖中</div>
                                <div class="count">剩余：{{item.stock_quantity}}</div>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </mt-loadmore>
        
    </div>
</template>

<script>
import navBar from '../Common/NavBar'
export default {
    data(){
        return {
           goodsList:[],
           page:1,
           isAllLoaded:false
        }
    },
    methods:{
      loadBottom(){    // 上拉加载
        this.loadBottomData(this.page);
        
      },
      dataInit(){
        this.$axios.get('getgoods?pageindex=' + this.page)
        .then( res => {
            this.goodsList = res.data.message;
            this.page ++;
        })
        .catch( err => {
            console.log("出错了")
        })
      },
      loadBottomData(){
        this.$axios.get('getgoods?pageindex=' + this.page)
        .then( res => {
            // 判断是否还有数据
            if(res.data.message == 0){
               this.$toast('没有更多数据了。。。。');
               this.isAllLoaded = true;   // loadmded的禁止函数来调用的属性来控制
            }
            this.goodsList = this.goodsList.concat(res.data.message);
            this.$refs.loadmore.onBottomLoaded();  // 通知元素重新定位
            this.page ++;
        })
        .catch( err => {
            console.log("出错了")
        })
      },
    },
    created(){
        this.page = this.$route.query.id || 1;
        this.dataInit(this.page);
    },
    components:{
        navBar
    }
}
</script>

<style lang="scss" scoped>
    #goodsList{
        width: 100%;
        overflow: hidden;
        position: relative;
        .mint-loadmore{
            width: 100%;
        }
        ul{
            width: 100%;
            overflow: hidden;
            margin-bottom: 6.25rem;
            li{
                width: 45%;
                // height: 7.5rem;
                border: 1px solid #333;
                float: left;
                margin-bottom: .9375rem;
            }
            li:nth-child(2n){
                float: right;
            }
        }
    }
</style>