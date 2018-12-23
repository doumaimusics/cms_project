<template>
  <div id="app">
      <!-- 顶部 -->
      <mt-header  title="信息管理系统"></mt-header>
      <!-- 中间内容 -->
      <router-view></router-view>
      <!-- 底部内容 -->
      <mt-tabbar v-model="selected">
        <mt-tab-item id="home">
          <img slot="icon" src="./assets/img/tab-bar-home-n.png">
          首页
        </mt-tab-item>
        <mt-tab-item id="member">
          <img slot="icon" src="./assets/img/member.png">
          会员
        </mt-tab-item>
        <mt-tab-item id="shopcart">
          <img slot="icon" src="./assets/img/tab-bar-car-n.png">
          购物车
        </mt-tab-item>
        <mt-tab-item id="seach">
          <img slot="icon" src="./assets/img/tab_bar_user_icon_no.png">
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
    watch:{
      selected(newV,oleV){
        this.$router.push({
          name:newV
        })
      }
    }
  }
</script>