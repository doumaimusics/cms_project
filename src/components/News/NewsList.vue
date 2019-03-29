<template>
    <div class="newsList">
        <nav-bar title="新闻列表"></nav-bar>
        <div class="news_list">
            <ul>
                <li v-for="(item,index) in newsList" @click="goDetail(item.id)">
                    <span>{{item.title}}</span>
                    <div class="news-desc">
                        <p class="p1">点击数：{{item.views}}</p>
                        <p class="p2">发布时间：{{item.dateAdd}}</p>
                    </div>
                    <div>{{item.zhaiyao}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import navBar from '../Common/NavBar'
export default {
    data(){
        return{
           newsList:[],
        }
    },
    methods: {
        newsInit(){
            this.$axios.get('cms/news/list').then( res => {
               this.newsList = res.data.data;
            }).catch( err => {
                console.log('出错了')
            })
        },
        goDetail(id){
            this.$router.push({
                path:'/news/detail',
                query:{id:id}
            })
        }
    },
    created() {
        this.newsInit();
    },
    components:{
        navBar
    }
}
</script>

<style lang="scss" scoped>
    .newsList{
        padding-top: 1.066667rem;
        .news_list{
            width: 100%;
            background: #fff;
            ul{
            padding: .32rem;
            li{
                width: 100%;
                border-bottom: 1px solid #e5e5e5;
                padding: .266667rem 0;
            }
        }
        }
        
        
    }
</style>
