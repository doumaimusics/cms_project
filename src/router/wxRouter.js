import Vue from 'vue'
import Router from 'vue-router'

import wxEntrance from '@/wx.vue'

const home = r => require.ensure([], () => r(require('../components/Home/Home.vue')), 'home') //首页

// import Home from '@/components/Home/Home'
// import Member from '@/components/Member/Member'
// import Seach from '@/components/Seach/Seach'
// import Shopcart from '@/components/Shopcart/Shopcart'


Vue.use(Router);  // 注册全局组件 router-view  router-link 挂在在Vue.prototype.$router || $route,未来所有的组件中的this对象，就具备该属性，所有的this就是vue的子类对象

export default new Router({
  history:false,
  base:__dirname,
  routes: [{
      path: '/',
      component: wxEntrance,
      children: [
        { path: '/', redirect:'/home' },
        { name:'home', path:'/home', component:home, meta:{ requireAuth: false} }

      ]
    },
    // {
    //   path: '/home',
    //   name:'home',
    //   component:Home
    // },
    // {
    //   path: '/member',
    //   name: 'member',
    //   component: Member
    // },
    // {
    //   path: '/seach',
    //   name: 'seach',
    //   component: Seach
    // },
    // {
    //   path: '/shopcart',
    //   name: 'shopcart',
    //   component: Shopcart
    // },
  ]
})
