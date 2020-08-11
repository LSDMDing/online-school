import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//css初始化
import '../public/css/ormalize.css'

//引入flexible
import 'lib-flexible/flexible.js'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper)

//mockjs
import Mock from './mock'

//filter
import * as filters from './filter'
Object.keys(filters).forEach((key)=> {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
