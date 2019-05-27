<template>
    <div id="member">
        <!-- <keep-alive>
             <form-comp1></form-comp1>
        </keep-alive> -->
            
        <!-- <hr> -->
        <!-- <form-comp2></form-comp2> -->
         <button @click="gai">改变</button>
         <hr>
          <keep-alive include="form1">
            <component :is="isShow"></component>
          </keep-alive>
          
    </div>
</template>

<script>
import FormComp1 from './components/form1'
import FormComp2 from './components/form2'
export default {
    data() {
        return{
           numbers: true,
           isShow: "FormComp1"        
        }
    },

    methods: {
        gai() {
           this.numbers = !this.numbers;
           console.log(this.numbers)
           if(!this.numbers) {
               this.isShow = 'FormComp2'
           } else {
               this.isShow = 'FormComp1'
           }
        }
    },

    components: {
        FormComp1,
        FormComp2
    }
}
</script>

<style lang="scss" scoped>
</style>