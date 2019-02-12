const state = {
    collects:[],  // 初始化一个数组
};

// vuex官方API提供了一个getters,和vue计算属性computed一样，用来实时监听state值的变化（最新状态），并且把他扔进Vuex.Store
const getters = {
    renderCollects(state) {   // 承载变化的collects
        return state.collects;
    }
};

// mutation对象中可以放改变state的初始值的方法，具体的用法就是给里面的方法传入参数state或额外的参数,然后利用vue的双向数据驱动进行值的改变，同样的定义好之后也把这个mutations扔进Vuex.Store里面，如下：
const mutations = {
    pushCollects(state,items){    // 如果变化collects,插入items
        state.collects.push(items);
    }
};

// actions对象变量最大的作用就是里面的Action方法 可以包含任意异步操作，这里面的方法是用来异步触发mutations里面的方法，actions里面自定义的函数接收一个context参数和要变化的形参，context与store实例具有相同的方法和属性，所以它可以执行context.commit(' '),然后也不要忘了把它也扔进Vuex.Store里面：
const actions = {
    invokePushItems(context,item){   // 触发mutations里面的pushCollects,传入数据形参item对应到items
         context.commit('pushCollects',item);       
    }
}

export default {
    namespaced:true, // 用于在全局引用此文件里的方法时标识这一个文件名
    state,
    getters,
    mutations,
    actions
}

