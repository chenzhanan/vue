import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import "../src/assets/css/base.css"
import "../src/assets/js/font.js"
import router from "./plugins/router"
import axios from "./plugins/axios"
//配置前端baseUrl
Vue.prototype.baseUrl = require('../config/config').active
new Vue({
  render: h => h(App),
  el:"#app",
  router,

}).$mount('#app')
