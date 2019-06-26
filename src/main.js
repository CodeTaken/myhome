// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

// mini ui
import { Button ,Checklist ,MessageBox} from 'mint-ui';

Vue.component(Button.name, Button);
Vue.component(Checklist.name, Checklist);


import store from './store'
import './mock/mockServer'
Vue.config.productionTip = false

// layzload
import VueLazyload from 'vue-lazyload'
import lazyloadingImg from './assets/imgs/loading.gif'
Vue.use(VueLazyload, {
  loading: lazyloadingImg,
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
