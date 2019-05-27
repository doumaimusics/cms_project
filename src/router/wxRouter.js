import Vue from 'vue'
import Router from 'vue-router'

import wxEntrance from '@/wx.vue'

/* 
import Home from '@/components/Home/Home';
import Member from '@/components/Member/Member';
*/

const home = r => require.ensure([], () => r(require('../components/Home/Home.vue')), 'home') //首页
const member = r => require.ensure([], () => r(require('../components/Member/Member.vue')), 'member');  // 会员
const shopcart = r => require.ensure([], () => r(require('../components/Shopcart/Shopcart.vue')), 'shopcart'); // 购物车
const seach = r => require.ensure([], () => r(require('../components/Seach/Seach.vue')), 'seach'); // 搜索
const newsList = r => require.ensure([], () => r(require('../components/News/NewsList.vue')), 'news');  // 新闻列表
const newsDetail = r => require.ensure([], () => r(require('../components/News/NewsDetail.vue')), 'news');  // 新闻详情
const photoList = r => require.ensure([], () => r(require('../components/Photo/PhotoList.vue')), 'photo');  // 图文列表
const goodsList = r => require.ensure([], () => r(require('../components/Goods/GoodsList.vue')), 'goods');  // 商品列表
const supervise = r => require.ensure([], () => r(require('../components/activity/supervise/index.vue')), 'super');  // E委会过程总页面
const enrol = r => require.ensure([], () => r(require('../components/activity/supervise/enrol.vue')), 'super')   // 入口页面


Vue.use(Router);  // 注册全局组件 router-view  router-link 挂在在Vue.prototype.$router || $route,未来所有的组件中的this对象，就具备该属性，所有的this就是vue的子类对象

export default new Router({
  history:false,
  base:__dirname,
  routes: [{
      path: '/',
      redirect: '/home',
      component: wxEntrance,
      children: [
        { path: '/', redirect:'/home' },
        { name:'home', path:'/home', component:home, meta:{ requireAuth: false, keepAlive: false }},
        { name:'member', path:'/member', component:member,meta:{ requireAuth: false, keepAlive: true }},
        { name:'shopcart', path: '/shopcart', component: shopcart, meta: { requireAuth: false, keepAlive: false }},
        { name:'seach', path: '/seach', component: seach, meta: { requireAuth: false, keepAlive: false }},   
        { name:'newsList', path: '/news/list', component: newsList, meta: {requireAuth: false, keepAlive: false }},
        { name:'newsDetail', path: '/news/detail', component: newsDetail, meta: {requireAuth: false, keepAlive: false }},
        { name:'photoList', path:'/photo/list', component: photoList, meta: {requireAuth: false, keepAlive: false }},
        { name:'goodsList', path:'/goods/list', component: goodsList, meta: {requireAuth: false, keepAlive: false }},
        { name:'supervise', path:'/supervise', component: supervise, 
          children:[
            { name:'enrol', path:'/supervise/enrol',component:enrol,meta:{requireAuth:false, keepAlive: false }}
          ]
        }
      ]
    },
  ]
})
