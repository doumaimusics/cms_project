/* 
   1、在SPA单页面组件的开发中 Vue的vuex和React的Redux 都统称为同一状态管理，个人的理解是全局状态管理更合适；简单的理解就是你在state中定义了一个数据之后，你可以在所在项目中的任何一个组件里进行获取、进行修改，并且你的修改可以得到全局的响应变更。下面咱们一步一步地剖析下vuex的使用:
   首先要安装、使用 vuex
   首先在 vue 2.0+ 你的vue-cli项目中安装 vuex :
   npm install vuex --save

   2、然后 在src文件目录下新建一个名为store的文件夹，为方便引入并在store文件夹里新建一个index.js,里面的内容如下:
   import Vue from 'vue';
   import Vuex from 'vuex';
   Vue.use(Vuex);
   const store = new Vuex.Store();
   export default store;

   3、接下来，在 main.js里面引入store，然后再全局注入一下，这样一来就可以在任何一个组件里面使用this.$store了：
   import store from './store'//引入store
    new Vue({
        el: '#app',
        router,
        store,//使用store
        template: '<App/>',
        components: { App }
    })

    4、modules 模块化 以及 组件中引入 mapGetters、mapActions 和 mapStates的使用
    因为在大多数的项目中，我们对于全局状态的管理并不仅仅一种情况的需求，有时有多方面的需求，比如写一个商城项目，你所用到的全局state可能是关于购物车这一块儿的也有可能是关于商品价格这一块儿的；像这样的情况我们就要考虑使用vuex中的 modules 模块化了，具体怎么使用modules呢？咱们继续一步一步的走：

    首先，在store文件夹下面新建一个modules文件夹，然后在modules文件里面建立需要管理状态的js文件，既然要把不同部分的状态分开管理，那就要把它们给分成独立的状态文件了，如下图：
    而对应的store文件夹下面的index.js 里面的内容就直接改写成：
    import footerStatus from './modules/footerStatus'
    import collection from './modules/collection'
    export default new Vuex.Store({
        modules:{
            footerStatus,
            collection
        }
    });
    相应的js，其中的 namespaced:true 表示当你需要在别的文件里面使用( mapGetters、mapActions 接下来会说 )时，里面的方法需要注明来自哪一个模块的方法:
    //collection.js
    const state={
        collects:[],  //初始化一个colects数组
    };
    const getters={
    renderCollects(state){ //承载变化的collects
        return state.collects;
    }
    };
    const mutations={
        pushCollects(state,items){ //如何变化collects,插入items
            state.collects.push(items)
        }
    };
    const actions={
        invokePushItems(context,item){ //触发mutations里面的pushCollects ,传入数据形参item 对应到items
            context.commit('pushCollects',item);
        }
    };
    export default {
        namespaced:true,//用于在全局引用此文件里的方法时标识这一个的文件名
        state,
        getters,
        mutations,
        actions
    }

    //footerStatus.js

    const state={   //要设置的全局访问的state对象
        showFooter: true,
        changableNum:0
        //要设置的初始属性值
    };
    const getters = {   //实时监听state值的变化(最新状态)
        isShow(state) {  //承载变化的showFooter的值
        return state.showFooter
        },
        getChangedNum(){  //承载变化的changebleNum的值
        return state.changableNum
        }
    };
    const mutations = {
        show(state) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
            state.showFooter = true;
        },
        hide(state) {  //同上
            state.showFooter = false;
        },
        newNum(state,sum){ //同上，这里面的参数除了state之外还传了需要增加的值sum
        state.changableNum+=sum;
        }
    };
    const actions = {
        hideFooter(context) {  //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
            context.commit('hide');
        },
        showFooter(context) {  //同上注释
            context.commit('show');
        },
        getNewNum(context,num){   //同上注释，num为要变化的形参
            context.commit('newNum',num)
        }
    };
    export default {
        namespaced: true, //用于在全局引用此文里的方法时标识这一个的文件名
        state,
        getters,
        mutations,
        actions
    }
*/
import Vue from 'vue';
import Vuex from 'vuex';
import footerStatus from './modules/footerStatus';
import collection from './modules/collection';
Vue.use(Vuex);

// 声明一个wxState变量，并赋值一个空对象给它，里面随便定义两个初始属性值；
// 要设置的全局访问的state对象
// const wxState = {   
//     // 要设置的初始值
//     showFooter: true,
//     changebleNum:222 
// };
/* 
实际上做完上面的三个步骤后，你已经可以用this.$store.state.showFooter或this.$store.state.changebleNum在任何一个组件里面获取showfooter和changebleNum定义的值了，但这不是理想的获取方式；vuex官方API提供了一个getters，和vue计算属性computed一样，来实时监听state值的变化(最新状态)，并把它也仍进Vuex.Store里面，具体看下面代码:
*/
// 实时监听wxState值的变化（最新状态）
// const getters = {   
//     isShow(wxState)　{  // 方法名随意，主要用来承载变化的showFooter的值
//         return wxState.showFooter
//     },
//     getChangedNum() {  // 方法名随意，主要用来承载变化的changebleNum的值
//         return wxState.changebleNum
//     }
// };

// 光有定义的state的初始值，不改变它不是我们想要的需求，接下来要说的就是mutations了，mutattions也是一个对象，这个对象里面可以放改变state的初始值的方法，具体的用法就是给里面的方法传入参数state或额外的参数,然后利用vue的双向数据驱动进行值的改变，同样的定义好之后也把这个mutations扔进Vuex.Store里面，如下：
// const mutations = {  
//     show(wxState) {   // 自定义改变wxState初始值的方法，这里面的参数除了wxState之外还可以在传入额外的参数（对象或者变量）
//         wxState.showFooter = true;
//     }, 
//     hide(wxState) {   // 同上
//         wxState.showFooter = false;
//     },
//     newNum(wxState,sum){  // 同上，这里面的参数除了wxState之外还传了需要增加的值sum
//         wxState.changebleNum += sum;
//     }
// };
/* 
这时候你完全可以用 this.$store.commit('show') 或 this.$store.commit('hide') 以及 this.$store.commit('newNum',6) 在别的组件里面进行改变showfooter和changebleNum的值了，但这不是理想的改变值的方式；因为在 Vuex 中，mutations里面的方法 都是同步事务，意思就是说：比如这里的一个this.$store.commit('newNum',sum)方法,两个组件里用执行得到的值，每次都是一样的，这样肯定不是理想的需求
*/

// 这个对象变量最大的作用就是里面的Action方法 可以包含任意异步操作，这里面的方法是用来异步触发mutations里面的方法，actions里面自定义的函数接收一个context参数和要变化的形参，context与store实例具有相同的方法和属性，所以它可以执行context.commit(' '),然后也不要忘了把它也扔进Vuex.Store里面：
// const actions = {
//     hideFooter(context) {   // 自定义触发mutations里函数方法，context与store实例具有相同方法和属性
//         context.commit('hide');
//     },
//     showFooter(context) {   // 同上注释
//         context.commit('show');
//     },
//     getNewNum(context,num){   // 同上注释， num为要变化的形参
//         context.commit('newNum',num);
//     }
// }
/* 
  而在外部组件里进行全局执行actions里面方法的时候，你只需要用执行

    this.$store.dispatch('hideFooter')

    或this.$store.dispatch('showFooter')

    以及this.$store.dispatch('getNewNum'，6) //6要变化的实参
*/

// const store = new Vuex.Store({
//       wxState,
//       getters,
//       mutations,
//       actions
// });

// export default store;
export default new Vuex.Store({  
    modules:{
        footerStatus,
        collection
    }
})