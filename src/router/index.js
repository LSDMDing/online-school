import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '@/router/search'
import User from '@/router/user'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  Search,
  User
]

const router = new VueRouter({
  routes
})

export default router
