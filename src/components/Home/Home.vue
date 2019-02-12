<template>
    <div id="home">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(img,index) in imgs" :key="index">
                  <img :src="img.img" alt="">
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
           imgs:[
               {
                   img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545820775451&di=2caf475debf3d6da05e0d88cb5d53fdb&imgtype=0&src=http%3A%2F%2Fimg03.tooopen.com%2Fuploadfile%2Fdowns%2Fimages%2F20110714%2Fsy_20110714135215645030.jpg'
               },
               {
                   img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545820775451&di=e1dae4624bbbef3c2b7a85273278a901&imgtype=0&src=http%3A%2F%2Fpic1.nipic.com%2F2008-12-30%2F200812308231244_2.jpg'
               }

           ],   // 轮播图片
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
        this.$axios.get('getlunbo')
        .then(res => {
            // this.imgs = res.data.message;
            // console.log(this.imgs)
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