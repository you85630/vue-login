import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex'
import 'assets/css/reset.css'
import axios from 'axios'
import echarts from 'echarts'

Vue.use(Vuex)
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
