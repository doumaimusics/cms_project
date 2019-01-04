<template>
    <div id="photo_list">
        <nav-bar title="分享列表"></nav-bar>
        <div class="title_list clear">
            <ul>
                <li v-for="(item,index) in titleList" :key="index" @click="titleClick(item.id)" :class="{active:item.id == n}">{{item.title}}</li>
            </ul>
        </div>

        <div class="content">
            <ul>
                <li v-for="(item,index) in imgData" :key="index">
                    <router-link tag="div" to="">
                        <img v-lazy="item.img_url" alt="">
                        <p>
                            <span>{{item.title}}</span>
                            <br/>
                            <span>{{item.zhaiyao}}</span>
                        </p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import navBar from '../Common/NavBar'
export default {
    data(){
        return {
           titleList:[],
           imgData:[],
           n:0

        }
    },
    methods: {
        titleListInit(){    // 顶部标题
            this.$axios.get('/getimgcategory').then( res => {
                this.titleList = res.data.message;
                this.titleList.unshift({
                    id:0,
                    title:"全部"
                })
            })
        },
        imgDataInit(id){    // 图文信息
            this.$axios.get('getimages/' + id).then( res => {
                this.imgData = res.data.message;
                if(this.imgData.length == 0){
                    this.$toast({
                        message:'暂无内容',
                        position:'center',
                        duration:1000
                    })
                }
            })
        },
        titleClick(id){
            this.$router.push({name:'photoList', params:{categoryId:id}});
            this.n = this.$route.params.categoryId;
        },
    },
    // 同一个路由，只是通过参数来改变内容，使用路由守卫的 组件守卫beforeRouteUpdate;  参数是query或者params
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    beforeRouteUpdate(to, from, next){   
        this.imgDataInit(to.params.categoryId);
        next()
    },
    components:{
        navBar
    },
    created() {
        this.titleListInit();   // 顶部分类信息

        let categoryId = this.$route.params.categoryId;
        this.imgDataInit(categoryId);   // 图文信息
    },
}
</script>

<style lang="scss" scoped>
    #photo_list{
        .title_list{
           
            background: #fff;
            position: fixed;
            top:  1.1rem;
            left: 0;
            right: 0;
            border-bottom: 1px solid #eee;
            padding: .373333rem;
            box-sizing: border-box;
            ul {
                display: -webkit-box;
                overflow-x: scroll;
                -webkit-overflow-scrolling:touch;
                li{
                    margin-right: .4rem;
                }
                li.active{
                    color: red;
                }
            }
        }
        .content{
            padding:2rem .453333rem .266667rem;
            background: #fff;
            li{
                 img{
                        // width: 100%;
                        height: 2.666667rem;
                    }
            }
        }
        image[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
        }
    }
</style>
