<template>
    <div class="detail">
        <nav-bar title="新闻详情"/>
        <div class="content">
           <p class="title">{{newsDetail.title}}</p>
           <div class="time">
               <span>添加时间：{{newsDetail.add_time |convertTime('YYYY年MM月DD日',2)}}</span>
               <span>点击数：{{newsDetail.click}}</span>
           </div>
           <div class="news_content" v-html="newsDetail.content"></div>
        </div>
    </div>
</template>

<script>
import navBar from '../Common/NavBar';
export default {
   data(){
       return {
          newsDetail:{}
       }
   },
   methods: {
       dataInit(){
           let id = this.$route.query.id;
           this.$axios.get('getnew/'+id).then(res => {
               console.log(res);
               this.newsDetail = res.data.message[0];
           }).catch(err => {
               console.log("cw")
           })
       }
   },
   created() {
       this.dataInit()
   },
   components:{
       navBar
   }
}
</script>

<style lang="scss" scpoed>
    .detail{
        padding-top: 1.066667rem;
        background: #fff;
        .content{
            padding: .933333rem .666667rem;
            .title{
                text-align: center;
                font-family: PingFangSC-Regular;
                font-size: .426667rem;
                color: #333;
                margin-bottom: .373333rem;
            }
            .time{
                font-family: PingFangSC-Regular;
                font-size: .293333rem;
                color: #666;
                margin-bottom: .626667rem;
            }
            .news_content{
                font-size: .346667rem;
                color: #666;
                text-indent: 2em;
                p{
                    margin-bottom: .4rem;
                }
            }
        }
    }
    
</style>
