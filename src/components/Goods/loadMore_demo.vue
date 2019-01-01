<template>
  <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" ref="loadmore" @top-status-change="handleTopChange">
    <ul>
      <!-- :auto-fill="false" 进入页面时默认不加载，设置成 true默认加载 -->
      <li v-for="item in list" :auto-fill="false">{{ item }}</li>
    </ul>
    <div slot="top" class="mint-loadmore-top">
      <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
      <span v-show="topStatus === 'loading'">Loading...</span>
    </div>
  </mt-loadmore>
</template>
<script>
  export default {
    data() {
      return {
        topStatus: '',
        // ...
        list:[1,2,3,4,5]
      };
    },
    methods: {
      handleTopChange(status) {
        this.topStatus = status;
        console.log(status)
      },
      loadTop(){   // 下拉加载
        console.log("下拉函数调用了");
        this.$refs.loadmore.onTopLoaded();
      },
      loadBottom(){
          console.log("上拉函数调用了");
        //   this.$refs.loadmore.onBottomLoaded();   // 注释后会卡住，解决办法是给list加元素，直到加满
      }
      // ...
    },
    // ...
  };
</script>