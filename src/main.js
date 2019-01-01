// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 配置axios
import Axios from 'axios'
// 配置公共url
Axios.defaults.baseURL = "http://www.sinya.online/api/"
Vue.prototype.$axios = Axios
// 配置请求拦截器，显示loading图标
Axios.interceptors.request.use(function(config) {
  MintUI.Indicator.open({
    text:'玩命加载中...'
  })
  return config;
});
// 配置响应拦截器，关闭loading图标
Axios.interceptors.response.use(function(response){
  // response.config类似 上面config
  MintUI.Indicator.close();
  return response;
})

// 配置MintUI
import MintUI from 'mint-ui';
// 引入mint css
import 'mint-ui/lib/style.css';

// 引入自己css
import './assets/publicCss/public.css'

// 引入自己的ul和li组件
// import MyUl from './components/Common/MyUl';
// import MyLi from './components/Common/MyLi';
// 注册全局组件
// Vue.component(MyUl.name,MyUl);
// Vue.component(MyLi.name,MyLi);

// 定义全局moment全局日期过滤器
import Moment from 'moment';
Vue.filter('convertTime', function(data,formatStr){
   return Moment(data).format(formatStr);
})


// 处理字符串过长的过滤器
Vue.filter('convertStr',function(str,count){
    return str ? str.substring(0,count)+'....' : '';
})


//  安装插件 注册全局组件
Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
