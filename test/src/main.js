// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './styles/base.css';
import Axios from 'axios';
Vue.prototype.$axios = Axios;
Vue.config.productionTip = false
import BaiduMap from "vue-baidu-map";
Vue.use(BaiduMap,{ak:'hIZOoADt1BAhcNSgbdIL8S8fjjMzbit0'});//使用百度地图接口
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
