<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(img,index) in imgs" :key="index">
        <img :src="img.img || img.src" alt>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: "my-swipe",
  props: ["url"],
  data(){
     return{
         imgs:[]
     }
  },
  created() {
    this.$axios
      .get(this.url)
      .then(res => {
        this.imgs = res.data.message;
        console.log(this.imgs);
      })
      .catch(err => {
        console.log("轮播图获取异常");
      });
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
    height: 200px;
    margin-bottom: 1.25rem;
    img {
      width: 100%;
    }
  }
</style>
