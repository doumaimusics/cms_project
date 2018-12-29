import Vue from 'vue'
import Router from 'vue-router'

import wxEntrance from '@/wx.vue'

const home = r => require.ensure([], () => r(require('../components/Home/Home.vue')), 'home') //首页
const member = r => require.ensure([], () => r(require('../components/Member/Member.vue')), 'member');  // 会员
const shopcart = r => require.ensure([], () => r(require('../components/Shopcart/Shopcart.vue')), 'shopcart'); // 购物车
const seach = r => require.ensure([], () => r(require('../components/Seach/Seach.vue')), 'seach'); // 搜索
const newsList = r => require.ensure([], () => r(require('../components/News/NewsList.vue')), 'news');  // 新闻列表
const newsDetail = r => require.ensure([], () => r(require('../components/News/NewsDetail.vue')), 'news');  // 新闻详情

Vue.use(Router);  // 注册全局组件 router-view  router-link 挂在在Vue.prototype.$router || $route,未来所有的组件中的this对象，就具备该属性，所有的this就是vue的子类对象

export default new Router({
  history:false,
  base:__dirname,
  routes: [{
      path: '/',
      component: wxEntrance,
      children: [
        { path: '/', redirect:'/home' },
        { name:'home', path:'/home', component:home, meta:{ requireAuth: false} },
        { name:'member', path:'/member', component:member,meta:{ requireAuth: false } },
        { name: 'shopcart', path: '/shopcart', component: shopcart, meta: { requireAuth: false } },
        { name: 'seach', path: '/seach', component: seach, meta: { requireAuth: false } },   
        { name: 'newsList', path: '/news/list', component: newsList, meta: {requireAuth: false}},
        { name:'newsDetail', path: '/news/detail', component: newsDetail, meta: {requireAuth: false}}
      ]
    },
  ]
})
