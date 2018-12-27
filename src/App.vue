<template>
  <div id="app">
      <!-- 顶部 -->
      <mt-header  title="信息管理系统"></mt-header>
      <!-- 中间内容 -->
      <router-view></router-view>
      <!-- 底部内容 -->
      <mt-tabbar v-model="selected">
        <mt-tab-item id="home">
          <img slot="icon" src="./assets/img/tab-bar-home-n.png" @click="changehasx">
          首页
        </mt-tab-item>
        <mt-tab-item id="member">
          <img slot="icon" src="./assets/img/member.png" @click="changehasx">
          会员
        </mt-tab-item>
        <mt-tab-item id="shopcart">
          <img slot="icon" src="./assets/img/tab-bar-car-n.png" @click="changehasx">
          购物车
        </mt-tab-item>
        <mt-tab-item id="seach">
          <img slot="icon" src="./assets/img/tab_bar_user_icon_no.png" @click="changehasx">
          查找
        </mt-tab-item>
      </mt-tabbar>
  </div>
</template>

<script>
  export default{
    data() {
      return {
         selected:''
      }
    },
    methods:{
        changehasx(){
          // this.$nextTick vue渲染完之后执行的事件
          this.$nextTick(function(){
             this.$router.replace({
               name:this.selected
             })
          })
        }
    },
    watch:{
      // selected(newV,oleV){
      //   console.log(newV)
      //   this.$router.push({
      //     name:newV
      //   })
      // }
    }
  }
</script>

  <style lang="scss" scoped>
    
.mint-tabbar {
  position: fixed;
  left: 0;
  bottom: 0;
}
  </style>