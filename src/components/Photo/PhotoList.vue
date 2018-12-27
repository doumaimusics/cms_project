<template>
  <div id="photo">
    <nav-bar title="图文分享列表"></nav-bar>
    <div class="title_list">
      <ul  class="clear">
        <li v-for="(item,index) in titleList" :key="item.id"  @click="category(item.id)">{{item.title}}</li>
      </ul>
    </div>

    <div>
      <ul>
        <li v-for="img in imgsData">
          <a href>
              <!-- mint ui懒加载，把src 换成v-lazy  css里面些上样式 -->
            <img v-lazy="img.img_url" alt style="width:100%;">
            <p>
              <span>{{img.title}}</span>
              <br>
              <span>{{img.zhaiyao}}</span>
            </p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import navBar from "../Common/NavBar";
export default {
  data() {
    return {
      titleList:[],
      imgsData: [],
      switch:false
    };
  },
  methods: {

      category(id){
         this.$axios.get('getimages/' + id).then( res => {
             this.imgsData = res.data.message;
             if(this.imgsData.length==0){
                 this.$toast({
                    message: '暂无内容',
                    position: 'center',
                    duration: 1000
                });
             }
         }).catch( err => {
             console.log("chucio")
         })
      },
      getGor(){   // 分类信息
          this.$axios.get('/getimgcategory').then( res=> {
              console.log(res)
              this.titleList  = res.data.message;
              this.titleList.unshift({
                 id:0,
                 title:'全部'
             })
          }).catch( err => {
              console.log("出错")
          })
      }
  },
  components: {
    navBar
  },
  beforeRouteUpdate(to, from, next){   // 路由复用，但参数改变触发；参数指的是：query和params
     console.log(to);
     this.category(to.params.categoryId);
     next();
  },
  created() {
    this.getGor();// 分类信息
    let categoryId = this.$route.params.categoryId;   // 获取路由参数
    this.category(categoryId);

  }
};
</script>

<style lang="scss" scoped>
.title_list{
    width: auto;
    height: 40px;
    margin-top: 20px;
    ul{
        li{
            float: left;
            margin: 0 5px;
        }
    }
}
image[lazy="loading"] {  // 懒加载样式 
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>