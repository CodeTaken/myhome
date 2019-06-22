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
import {
  reqPwdForm,
  reqUserInfo,
  reqPageAd,
  reqShopsList,
  reqShopGoods,
  reqShopInfo,
  reqShopRatings
} from '../api/index'


export default {
  // 同步记录用户信息
  recordUser({commit}, userInfo) {
    //console.log(userInfo);
    commit(RECEIVE_USERINFO, userInfo)
  },
  // 同步获取用户信息
  async ressetUser({commit}, userInfo) {
    //console.log(userInfo);
    const result = await reqUserInfo()
    if(result.code ===0 && localStorage.getItem("userInfo")){
      //console.log('get>>>>userInfo');
      //console.log(localStorage.getItem("userInfo"));
      const userInfo = result.data;
      commit(RESER_USERINFO, userInfo)
    }
  },
  //异步获取广告信息
  async getAdvent({commit}){
    const result = await reqPageAd()
    console.log(result);
    if(result.code ===0){
      const ad = result.data
      commit(RECEIVE_AD,ad)
    }
  },
  // 异步获取商家列表信息
  async getShopList ({commit}) {
    const result =await reqShopsList();
    if(result.code === 0){
      const shopList = result.data
      commit(RECEIVE_SHOPLIST,shopList)
    }
  },

  // 异步获取商家商品信息
  async getShopGoods ({commit},id){
    let result  =await reqShopGoods(id)
    console.log(result);
    if(result.code===0){
      let goods = result.data
        commit(RECEIVE_SHOPGOODS,goods)
    }
  },

  //异步获取商家基本信息
  async getShopInfo({commit},id){
    let result =await reqShopInfo(id)
    if(result.code===0){
      let info  = result.data
      commit(RECEIVE_SHOPINFO,info)
    }
  },
  // 异步获取商家评论信息
  async getShopRatings({commit},id){
    let result = await reqShopRatings(id)
    if(result.code===0){
      let ratings = result.data
      commit(RECEIVE_SHOPRATINGS,ratings)
    }
  },

  // 同步更新foods;
  uploadCartControl({commit},{type,food}){

    if (type == 'add') {
      // if (!food.count) {
      //   food.count = 1;
      // } else {
      //   food.count++
      // }
      commit(ADD_COUNT, food)
    } else {
      // if (food.count > 0) {
      //   food.count--
      // } else {
      //   food.count = 0
      // }
      commit(DEC_COUNT,food)
    }
  },
  clearCart({commit}){
    commit(USER_CART)
  }

}



