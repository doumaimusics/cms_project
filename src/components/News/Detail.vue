<template>
    <div id="detail">
        <nav-bar :title="title"></nav-bar>
         <div class="news-title">
             <p>{{newsDetail.title}}</p>
             <div>
                 <span>{{newsDetail.click}}点击次数</span>
                 <span>分类</span>
                 <span>添加时间：{{newsDetail.add_title | convertTime('YYYY年MM月DD日')}}</span>
             </div>
         </div>
         <div class="news-content" v-html="newsDetail.content"></div>
    </div>
</template>

<script>
import navBar from  '../Common/NavBar'
export default {
    data(){
        return{
            title:'',  // 标题
            newsDetail:{}
        }
    },
    components:{
        navBar
    },
    methods:{
        dataInit(){
            let id = this.$route.query.id
            this.$axios.get('getnew/' + id)
            .then( res =>  {
               this.newsDetail = res.data.message[0];
            })
            .catch( err => {
                console.log(err)
            })
        }
    },
    created(){
        this.dataInit()
    },

    // 路由确认前，组件渲染前的守卫函数
    beforeRouteEnter(to, from, next) {
       console.log(to);
       console.log(from);
       // 1：判断from，万一from的name是空，说明是 复制粘贴的地址栏
       //    1.1 继续判断，根据to来设置title
       // 2:如果 from是新闻列表过来的， 就给title为新闻列表
       // 3:如果 from是商品详情， 就给title为商品图文介绍
       let title = ''
       if(from.name == '' || from.name == null){
           if(to.name == 'newsList'){
               title = "新闻详情"
           } else if(to.name == 'goodsDetail'){
               title = "商品图文介绍"
           }   // photoInfo
       } else if(from.name == 'newsList'){
               title = "新闻详情"
       } else  if(from.name == 'goodsDetail'){
               title = "商品图文介绍"
       }
       // 最终都方向，
       next(vm => {
           vm.title = title;   // vm  就是未来组件的对象this
       })
    }
}
</script>

<style lang="scss" >
    .news-content{
        width: 100%;
        table{
            width: 100%;
        }
    }
</style>