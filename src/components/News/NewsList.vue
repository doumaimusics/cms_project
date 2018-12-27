<template>
    <div  id="newsList">
        <nav-bar title="新闻列表"></nav-bar>
        <div>
            <ul>
                <li v-for="(item,index) in  newsList" :key="index" @click="toNewsDetail(item.id)">
                   <img src="" alt="">
                   <div>
                       <span>{{item.title}}</span>
                       <div class="news-desc">
                           <p class="p1">点击数：{{item.click}}</p>
                           <p class="p2">发表时间：{{item.add_time | convertTime('YYYY-MM-DD')}}</p>
                       </div>
                   </div>
                </li>
            </ul>
        </div>
        
    </div>
</template>


<script>
import navBar from '../Common/NavBar'
// import MyLi from '../Common/MyLi'
export default {
    data(){
        return {
           newsList:[]
        }
    },
    methods:{
       newsInit(){
           this.$axios.get('getnewslist').then( res =>  {
               this.newsList = res.data.message;
           })
       },
       toNewsDetail(id){
            this.$router.push({
                path:'/news/detal',
                query:{id:id}
            })
       }
    },
    components:{
        navBar
    },
    created(){
        this.newsInit();
    },
    
}
</script>
<style lang="scss" scoped>
    #newsList{
        overflow: hidden;
        position: relative;
        .news-desc{
            .p1{
                color: #ff6600;
            }
            .p2{
               color: #e5e5e5;
            }
        }
    }
</style>