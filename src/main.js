// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import wx from './wx'
import wxRouter from './router/wxRouter'

// 配置axios
import Axios from 'axios'
// 配置公共url
Axios.defaults.baseURL = "http://www.sinya.online/api/"
Vue.prototype.$axios = Axios

// 配置MintUI
import MintUI from 'mint-ui';
// 引入mint css
import 'mint-ui/lib/style.css';

// 引入自己css
import './assets/publicCss/public.css'

 // 引入公用过滤器
import './common/publicFilter/publicFilte'




//  安装插件 注册全局组件
Vue.use(MintUI)

Vue.config.productionTip = false

// 判断用户终端是PC还是移动端，移动端则跳到微信H5首页
const ua = navigator.userAgent.toLowerCase()
if (/iphone|ipad|ipod/.test(ua) || /android/.test(ua)) {
  var router = wxRouter
  new Vue({
    router
  }).$mount('#start')
} else {
  const router = pcRouter
  new Vue({
    router
  }).$mount('#start')
}