// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import wxRouter from './router/wxRouter'


// 配置axios
import Axios from 'axios'
// 配置公共的uel
Axios.defaults.baseURL = "https://api.it120.cc/wangapi/"
Vue.prototype.$axios = Axios
// 配置请求拦截器
Axios.interceptors.request.use((config)=>{
  MintUI.Indicator.open({
    text:'玩命加载中。。。。'
  })
  return config;
},(error) => {
  MintUI.Indicator.open({
    text:'请求出错误'
  })
  return Promise.reject(error)
})
// 配置响应拦截器
Axios.interceptors.response.use((response) => {
  MintUI.Indicator.close();   // 请求成功关闭
  return response;
},(error) => {
  MintUI.Indicator.open({
    text:'请求不成功。。。'
  })
  return Promise.reject(error)
})



// 配置MintUI
import MintUI from 'mint-ui';
// 引入mint css
import 'mint-ui/lib/style.css';

// 引入自己css
import './assets/publicCss/public.css'

 // 引入公用过滤器
import './common/publicFilter/publicFilte'

// 引入vuex
import store from './store'




//  安装插件 注册全局组件
Vue.use(MintUI)

Vue.config.productionTip = false

// 判断用户终端是PC还是移动端，移动端则跳到微信H5首页
const ua = navigator.userAgent.toLowerCase()
if (/iphone|ipad|ipod/.test(ua) || /android/.test(ua)) {
  var router = wxRouter
  new Vue({
    router,
    store,  // 使用store vuex全家桶
  }).$mount('#start')
} else {
  // const router = pcRouter
  new Vue({
    router
  }).$mount('#start')
}