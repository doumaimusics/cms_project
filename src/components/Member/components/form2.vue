<template>
    <div id="form2">
        <input type="text" v-model="value">
        <button @click="add">提交</button>
        <p>{{value}}</p>
    </div>
</template>

<script>
export default {
    name:'form2',
    data() {
        return {
            value:''
        }
    },

    methods: {
        add(){
            this.value = "456"
        }
    },
}
</script>

