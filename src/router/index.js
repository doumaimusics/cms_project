import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home/Home';
import Member from '@/components/Member/Member';
import Seach from '@/components/Seach/Seach';
import Shopcart from '@/components/Shopcart/Shopcart';
import NewsList from '@/components/News/NewsList';   // 新闻列表
import NewsDetail from '@/components/News/Detail';   // 新闻详情
import PhotoList from '@/components/Photo/PhotoList';   // 图文分享
import GoodsList from '@/components/Goods/GoodsList';  // 商品列表
import goodsDetail from '@/components/Goods/GoodsDetail';  // 商品详情

Vue.use(Router); // 注册全局组件 router-view  router-link 挂在在Vue.prototype.$router || $route,未来所有的组件中的this对象，就具备该属性，所有的this就是vue的子类对象

export default new Router({
  routes: [{
    path: '/',
    component: Home,
    redirect:{ name:'home' }
  }, {
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/member',
    name: 'member',
    component: Member
  }, {
    path: '/seach',
    name: 'seach',
    component: Seach
  }, {
    path: '/shopcart',
    name: 'shopcart',
    component: Shopcart
  }, 
    // 新闻列表 
  {
    path:'/news/list',
    name:'newsList',
    component:NewsList
  },
  {
    path:'/news/detal',
    name:'newsDetal',
    component:NewsDetail
  },
  {
    path:'/photo/list/:categoryId',
    name:'photoList',
    component:PhotoList
  },
  // 商品列表
  {
    path: '/goods/list',
    name: 'goodsList',
    component: GoodsList
  },
  // 商品详情
  {
    path: '/goods/detail/:id',
    name: 'goodsDetail',
    component: goodsDetail
  }
]
})
