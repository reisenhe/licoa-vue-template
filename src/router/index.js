import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Hotel from '@/pages/Hotel'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/hotel',
      name: 'Hotel',
      component: Hotel
    }
  ]
})

export default router