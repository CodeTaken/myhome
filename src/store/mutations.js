import  Vue from 'vue'
import {
  RECEIVE_USERINFO,
  RESER_USERINFO,
  RECEIVE_AD,
  RECEIVE_SHOPLIST,
  RECEIVE_SHOPGOODS,
  RECEIVE_SHOPINFO,
  RECEIVE_SHOPRATINGS,
  ADD_COUNT,
  DEC_COUNT,
  USER_CART
} from './mutations-types'

export default {
  [RECEIVE_USERINFO] (state, userInfo) {
    state.userInfo = userInfo
    localStorage.setItem("userInfo",userInfo);
  },
  [RESER_USERINFO] (state, userInfo) {
    state.userInfo = userInfo
  },
  [RECEIVE_AD] (state,ad) {
    state.ad = ad
  },
  [RECEIVE_SHOPLIST] (state,shopList){
    state.shopList = shopList
  },
  [RECEIVE_SHOPGOODS](state,goods){
    state.goods = goods
  },
  [RECEIVE_SHOPINFO](state,info){
    state.info = info
  },
  [RECEIVE_SHOPRATINGS](state,ratings){
    state.ratings = ratings
  },

  // 添加未有的字段
  [ADD_COUNT](state,food){
    // ? 如何知道是哪一个 food ?
    // 猜测：vuex 中的元素 是随时监听的状态。
    if(!food.count){
      Vue.set(food,'count',1)
      state.userCart.push(food)
    }else{
      food.count++
    }
    // 用户选择了，将 food 存入 userCart 中，如果用户 选择+1了，咋办？

    // 一般情况是直接赋值，但是添加未有元素是使用 。Vue.set()
  },
  [DEC_COUNT](state,food){
    if(food.count && food.count>1){
      //console.log('该物品 --');
      food.count--
    }else{
      food.count = 0;
      //console.log('移除该物品');
      state.userCart.splice(state.userCart.indexOf(food), 1)
    }
  },
  // 清空购物车
  [USER_CART](state){

    //再清空 food 里的count  还是清空  userCart 的 count ?
    state.userCart.forEach(value=> value.count=0 )
    state.userCart = [];
  }


}
