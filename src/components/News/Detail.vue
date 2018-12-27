<template>
    <div id="detail">
        <nav-bar title="新闻详情"></nav-bar>
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
    }
}
</script>

<style lang="scss" scoped>
    
</style>