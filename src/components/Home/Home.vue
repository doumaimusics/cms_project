<template>
  <div id="home">
   
    <my-swipe url="getlunbo"></my-swipe>
    <!-- 九宫格 -->
    <div class="grid">
      <my-ul>
        <my-li v-for="(item,index) in listBg" :key="index">
          <router-link :to="item.router">
            <span :style="{background:'url('+item.bg+')'}"></span>
            <p>{{item.text}}</p>
          </router-link>
        </my-li>
      </my-ul>
    </div>
  </div>
</template>

<script>
import MyUl from "../Common/MyUl";
import MyLi from "../Common/MyLi";
import MySwipe from '../Common/mySwipe';
export default {
  data() {
    return {
      imgs: [], // 轮播图片
      listBg: [
        {
          bg: require("../../assets/img/grit/icon_01.png"),
          text: "新闻咨询",
          router: {
            name: "newsList"
          }
        },
        {
          bg: require("../../assets/img/grit/icon_02.png"),
          text: "图文分享 ",
          router: {
            name: "photoList",
            params: { categoryId: 0 }
          }
        },
        {
          bg: require("../../assets/img/grit/icon_03.png"),
          text: "商品展示",
          router: {
            name: "goodsList",
            query:{id:1}
          }
        },
        {
          bg: require("../../assets/img/grit/icon_04.png"),
          text: "留言反馈",
          router: {
            name: "pigActiviy",
            query:{id:1}
          }
        },
        {
          bg: require("../../assets/img/grit/icon_05.png"),
          text: "搜索资讯",
          router: {
            url: "photoList",
            params: { categoryId: 0 }
          }
        },
        {
          bg: require("../../assets/img/grit/icon_06.png"),
          text: "联系我们",
          router: {
            url: "photoList",
            params: { categoryId: 0 }
          }
        }
      ]
    };
  },
  created() {
    
  },
  components: {
    MyUl,
    MyLi,
    MySwipe
  }
};
</script>

<style lang="scss" scoped>
#home {
  position: relative;
  overflow: hidden;
  .grid {
    text-align: center;
    a {
      width: 100%;
      height: 100%;
      display: block;
      span {
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