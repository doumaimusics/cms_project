<template>
    <div id="home">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(img,index) in imgs" :key="index">
                  <img :src="img.img" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <!-- 九宫格 -->
        <div class="grid">
            <my-ul>
                <my-li v-for="(item,index) in listBg" :key="index">
                    <a href="">
                        <span :style="{background:'url('+item.bg+')'}"></span>
                        <p>{{index+1}}</p>
                    </a>
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
           imgs:[],   // 轮播图片
           listBg:[
               {
                   bg:require('../../assets/img/grit/icon_01.png'),
                   text:'1'
                },
                {
                   bg:require('../../assets/img/grit/icon_02.png'),
                   text:'2'
                },
                {
                   bg:require('../../assets/img/grit/icon_03.png'),
                   text:'3'
                },
                {
                   bg:require('../../assets/img/grit/icon_04.png'),
                   text:'4'
                },
                {
                   bg:require('../../assets/img/grit/icon_05.png'),
                   text:'5'
                },
                {
                   bg:require('../../assets/img/grit/icon_06.png'),
                   text:'6'
                },

           ]
        }
    },
    created(){
        this.$axios.get('getlunbo')
        .then(res => {
            this.imgs = res.data.message;
            console.log(this.imgs)
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
                        }
                    }
        }
    }
</style>