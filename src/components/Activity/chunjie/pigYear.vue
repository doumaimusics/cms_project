<template>
    <div id="pig">
         <ul class="title">
            <li>
                <div class="bg" @click="tab(0)" :style="{background:'url('+obj.pig1.img_l+')'}" v-if="num >= 0"></div>
                <div class="bg" :style="{background:'url('+obj.pig1.img_a+')'}" v-if="num < 0"></div>
            </li> 
            <li>
                <div class="bg" @click="tab(1)" :style="{background:'url('+obj.pig2.img_l+')'}" v-if="num >= 1" ></div>
                <div class="bg" :style="{background:'url('+obj.pig2.img_a+')'}" v-if="num <= 0"></div>
            </li>
            <li>
                <div class="bg" @click="tab(2)" :style="{background:'url('+obj.pig3.img_l+')'}" v-if="num == 2"></div>
                <div class="bg" :style="{background:'url('+obj.pig3.img_a+')'}" v-if="num <= 1"></div>
            </li>  
         </ul>
         <div v-if="num != -1">
            <pig-one v-if="a == 0"></pig-one>
            <pig-two v-else-if="a == 1"></pig-two>
            <pig-three v-else="a == 2"></pig-three>
         </div>
         

    </div>
</template>

<script>
import pigOne from './pig1';
import pigTwo from './pig2';
import pigThree from './pig3';
export default {
    data(){
        return{
            num:0,   // -1、没有机会  0、第一猪亮  1、第一只和第二只猪  2、三只猪全亮
            obj:{
                pig1:{
                  img_l:"/static/img/pigYear/pig_l_icon1.png",
                  img_a:"/static/img/pigYear/pig_s_icon1.png",
                },
                pig2:{
                   img_l:"/static/img/pigYear/pig_l_icon2.png",
                   img_a:"/static/img/pigYear/pig_s_icon2.png" 
                },
                pig3:{
                   img_l:"/static/img/pigYear/pig_l_icon3.png",
                   img_a:"/static/img/pigYear/pig_s_icon3.png" 
                }
            },
            a:null
        }
    },
    methods:{
        tab(n){
           if(n == 0){
               this.a = 0;
           } else if(n == 1){
               this.a = 1;
           } else {
               this.a = 2;
           }
        }
    },
    mounted(){
        this.a = this.num;
    },
    components:{
        pigOne,
        pigTwo,
        pigThree
    }
}


</script>

<style lang="scss" scoped>
    #pig{
        width: 100%;
        overflow: hidden;
        position: relative;
        .title{
            width: 100%;
            height: 5rem;
            padding: 0 .625rem;
            li{
                width: 5rem;
                height: 5rem;
                float: left;
                margin-right: .625rem;
                div{
                    width: 100%;
                    height: 100%;
                    background-size: cover!important;
                    background-repeat: no-repeat!important;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
</style>