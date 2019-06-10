import Vue from 'vue'
import Router from 'vue-router'

import  Home from '../pages/Home/Home.vue'
import  Order from '../pages/Order/Order.vue'
import  ShopCart from '../pages/ShopCart/ShopCart.vue'
import  Profile from '../pages/Profile/Profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/shopCart',
      name: 'ShopCart',
      component: ShopCart
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/',
     redirect:'/home'
    },
  ]
})
