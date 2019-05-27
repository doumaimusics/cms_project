<template>
    <div id="form1">
        <!-- <input type="text" v-model="value"> -->
        <button @click="add">提交</button>
      
            <p>{{msg}}</p>
       
       <ul>
           <li v-for="item in obj" :key="item">{{item}}</li>
       </ul>
            
    </div>
</template>

<script>
export default {
    name: 'form1',
    data() {
        return {
            value:'',
            msg:'123',
            obj: {
                a: 'obj a'
            }
        }
    },

    methods: {
        add(){
            this.msg = "456",
            // this.obj.b = 'obj.b'
            this.$set(this.obj,'b','obj b')
        }
    },

    activated() {
        console.log("组件被激活了")
    },

    deactivated() {
        console.log("组件被停用了")
    },

    created() {
        console.log(this.msg)
    },
}
</script>

