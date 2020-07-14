import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//css初始化
import '../public/css/ormalize.css'

//引入flexible
import 'lib-flexible/flexible'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
