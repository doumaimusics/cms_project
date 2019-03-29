<template>
    <div id="home">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(img,index) in imgs" :key="index">
                  <img :src="img.picUrl" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格 -->
        <div class="grid clear">
            <my-ul>
                <my-li v-for="(item,index) in listBg" :key="index">
                    <router-link :to="item.router">
                        <span :style="{background:'url('+item.bg+')'}"></span>
                        <p>{{item.text}}</p>
                    </router-link>
                </my-li>
            </my-ul>
        </div>
        <wx-footer></wx-footer>
    </div>
</template>

<script>
import MyUl from '../Common/MyUl';
import MyLi from '../Common/MyLi';
import wxFooter from '../wxFooter';
export default {
    data(){
        return{
            imgs:[],
           
           listBg:[
                {
                   bg:require('../../assets/img/grit/icon_01.png'),
                   text:'新闻咨询',
                   router:{
                       name:'newsList'
                   }
                   
                },
                {
                   bg:require('../../assets/img/grit/icon_02.png'),
                   text:'图文分享',
                   router:{
                       name:'photoList',
                       params:{categoryId:0}
                   }
                },
                {
                   bg:require('../../assets/img/grit/icon_03.png'),
                   text:'商品展示',
                   router:{
                       name:'goodsList',
                       query:{id:0}
                   }
                },
                {
                   bg:require('../../assets/img/grit/icon_04.png'),
                   text:'留言反馈',
                   router:{
                       name:'photoLIst',
                       
                   }
                },
                {
                   bg:require('../../assets/img/grit/icon_05.png'),
                   text:'查看进度',
                   router:{
                       name:'enrol',
                   }
                },
                {
                   bg:require('../../assets/img/grit/icon_06.png'),
                   text:'联系我们',
                   router:{
                       name:'photoLIst',
                       
                   }
                },

           ]
        }
    },
    created(){
        this.$axios.get('banner/list')
        .then(res => {
            console.log(res)
            this.imgs = res.data.data;            
        })
        .catch(err => {
            console.log('轮播图获取异常')
        })
    },
    components:{
        MyUl,
        MyLi,
        wxFooter
    }
}
</script>

<style lang="scss" scoped>
    #home{
        position: relative;
        overflow: hidden;
        .mint-swipe{
            height: 200px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .grid{
            text-align: center;
            margin-top: .4rem;
            background: #fff;
            padding-top: .4rem;
            li{
                margin-bottom: .2rem;
            }
            a{
                width: 100%;
                height: 100%;
                display: block;
               
                span{
                    width: 45px;
                    height: 45px;
                    display: block;
                    margin: 0 auto;
                    background-size: cover !important;
                    margin-bottom: .266667rem;
                }
            }
            p{
              font-size: .346667rem;  
              color: #333;
            }
        }
    }
</style>