<template>
  <div class="goodsList">
    <nav-bar title="商品列表"></nav-bar>
     <p v-if="isShow">1234</p>

     <ul>
        <li v-for="(val,index) in arrList" :key="index">
             <h5>{{val.productName}}</h5>
              <p>{{val.price}}</p>
        </li>
     </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import navBar from "@/components/Common/NavBar";
export default {
  data() {
    return {
    };
  },
  components: {
    navBar
  },
  computed:{
    // isShow(){
    //   return this.$store.getters.getChangedNum
    // }
    // ...mapState({     //  这的...是超引用，ES6语法，意思是state里有多少个属性值，可以在这里放多少属性值
    //   isShow:state => state.footerStatus.showFooter   // 注意这些与上面的区别就是state.footerStatus,
    //                                                   // 里面定义的showFooter是指footerStatus.js里state的showFooter
    // }),
    // 也可以用下面的mapGetters来获取isShow的值，下面的更简洁
    /* 
       ...mapGetters('footerStatus', {   // footerStatus指的是modules文件夹下的footerStatus.js模块
          isShow: 'isShow'    // 第一个isShow是自己定义的只要对应template里v-if="isShow"就行
                              // 第二个isShow是对应的footerStatus.js里的getters里的isShow
       })
    */

   // ...mapState({  //用mapState来获取collection.js里面的state的属性值
        //    arrList:state=>state.collection.collects
        // }),
        ...mapGetters('collection',{ //用mapGetters来获取collection.js里面的getters
            arrList:'renderCollects'
        })
  },
  mounted() {
  },
  created() {
  },
  watch: {
    $route(to,from){  // //跳转组件页面后，监听路由参数中对应的当前页面以及上一个页面
        console.log(to,from)
      if(to.query.id == 0){
         this.$store.dispatch('footerStatus/showFooter'); // 这里改为'footerStatus/showFooter',意思是指footerStatus.js里actions里的showFooter方法
      } else {
         this.$store.dispatch('footerStatus/hideFooter')
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.goodsList {
  padding-top: 1.333333rem;
  .data_box {
    width: 100%;
    height: 4rem;
    background: #f90;
    position: relative;
    .fly {
      position: absolute;
      right: 0;
      transform: translateX(xxvw);
      animation: go 2s ease-in infinite;
    }
    @keyframes go {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(-100%);
      }
    }
  }
}
</style>
