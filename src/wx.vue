<template>
  <div id="wx">
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
     
  </div>
</template>

<script>
function init(){
    var width = document.documentElement.clientWidth; //获取设备的宽度

    //动态的为根元素设置字体的大小
    document.documentElement.style.fontSize = 32 * (width/320)*0.5 + 'px';
    document.getElementsByTagName('body')[0].style.fontSize= 16 + 'px';

    const ua = navigator.userAgent.toLowerCase();
      if (/iphone|ipad|ipod/.test(ua) || /android/.test(ua)) {
    document.documentElement.style.fontSize = 32 * (width/320) + 'px';
        document.getElementsByTagName('body')[0].style.background= '#f8f8f8';
        //document.getElementsByTagName('body')[0].style.fontFamily= '微软雅黑';
      }
}
init();
window.addEventListener('resize', init)

  export default{
    name: 'wx',
    data() {
      return {
         selected:''
      }
    },
    watch:{
    }
  }
</script>

<style lang="scss">
  .fade-enter-active,.fade-leave-active{
      transition: opacity .5s;
  }
  .fade-enter,.fade-leave-to {
    opacity: 0;
  }
</style>