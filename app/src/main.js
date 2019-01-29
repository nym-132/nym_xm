// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/index.css";  
import "./assets/rem.js";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import MIntUI from "mint-ui"
import 'mint-ui/lib/style.css';
import 'mint-ui/lib/index.js'
import req from "./api/req.js"; //倒入请求模块
Vue.use(ElementUI);
Vue.use(MIntUI);
Vue.prototype.$swiper = Swiper;
Vue.prototype.$http = req;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  
})
