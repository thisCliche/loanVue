import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/reset.css'
import '@/assets/js/rem.js'
import '@/plugins/vant.js'
import '@/assets/font/iconfont.css'

import eruda from 'eruda'
Vue.config.productionTip = false

// eruda.init()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
