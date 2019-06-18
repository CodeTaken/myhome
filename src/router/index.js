import Vue from 'vue'
import Router from 'vue-router'

import  Home from '../pages/Home/Home.vue'
import  Order from '../pages/Order/Order.vue'
import  ShopCart from '../pages/ShopCart/ShopCart.vue'
import  Profile from '../pages/Profile/Profile.vue'

import  Login from '../pages/Login/Login.vue'
import  Users from '../pages/Users/Users.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta:{
        footerBarShow:true
      }
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      meta:{
        footerBarShow:true
      }
    },
    {
      path: '/shopCart',
      name: 'ShopCart',
      component: ShopCart,
      meta:{
        // footerBarShow:true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta:{
        footerBarShow:true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta:{

      }
    },
    {
      path: '/users',
      name: 'Users',
      component: Users,
      meta:{

      }
    },
    {
      path: '/',
     redirect:'/home'
    },
  ]
})
