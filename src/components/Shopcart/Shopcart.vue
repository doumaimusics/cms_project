<template>
    <div id="shopcart">
        <section>
            <div class="joinStateHead">
                <span class="h3">商品1</span>
                <span class="joinStatus" @click="invokePushItems(item)">加入收藏列表</span>
            </div>
        </section>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data(){
       return{
           msg:'',
           item:{
               id:'01',
               productName:'苹果',
               price:'1.6元/斤'
           }
       }
    },
    mounted() {
        this.$store.dispatch('footerStatus/hideFooter')
    },
    methods: {
        ...mapActions('collection',[   // //collection是指modules文件夹下的collection.js
            'invokePushItems'   //collection.js文件中的actions里的方法，在上面的@click中执行并传入实参
        ])
    },
    components:{
        // conditionFilter
    }
}
</script>

<style lang="scss" scoped>
    #shopcart{
        position: relative;
        width: 100%;
        overflow: hidden;
        .joinStateHead{
            width: 100%;
            .joinStatus{
                padding: .4rem;
                background: #f40;
            }
        }
    }
</style>