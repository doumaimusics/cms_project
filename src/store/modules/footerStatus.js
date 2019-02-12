const state = {    // 要设置的全局访问对象
    // 要设置的初始属性值
    showFooter:true,
    changableNum:0
};

const getters = {  // 实时监听state值的变化（最新状态）
    isShow(state) {   // 承载变化的showFooter的值
        return state.showFooter
    },
    getChangedNum(){   // 承载变化的changableNum的值
        return state.changableNum
    }
};

// mutation对象中可以放改变state的初始值的方法，具体的用法就是给里面的方法传入参数state或额外的参数,然后利用vue的双向数据驱动进行值的改变
const mutations = {   
    show(state){  // 自定义改变state初始值的方法，这里面的参数除了stat之外还可以在传额外的参数（变量或者对象）
        state.showFooter = true;
    },
    hide(state){
        state.showFooter = false;
    },
    newNum(state,sum){
        state.changableNum +=sum;
    }
};

// actions对象变量最大的作用就是里面的Action方法 可以包含任意异步操作，这里面的方法是用来异步触发mutations里面的方法，actions里面自定义的函数接收一个context参数和要变化的形参，context与store实例具有相同的方法和属性，所以它可以执行context.commit(' ')
const actions = {
    hideFooter(context) {    // 自定义触发mutations里函数方法，context与state实例具有相同方法和属性
        context.commit('hide');
    },
    showFooter(context) {
        context.commit('show');
    },
    getNewNum(context,num) {
        context.commit('newNum',num);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}