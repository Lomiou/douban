import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)
import './lib/dist/css/mui.min.css'
import router from './router/router'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import { Indicator } from 'mint-ui';
Vue.use(Indicator)
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
