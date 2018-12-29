import Vue from 'vue';
import Moment from 'moment';

Moment.locale('zh-cn')
Vue.filter('convertTime', function (data,formatStr,n) {   // 时间处理组件
    if(n == 1){
        return Moment(data).format(formatStr);
    } else if(n == 2){
        return Moment(data).fromNow();
    }
    
})