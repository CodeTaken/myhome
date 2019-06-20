
import {
  RECEIVE_USERINFO,
  RESER_USERINFO,
  RECEIVE_AD,
  RECEIVE_SHOPLIST,
  RECEIVE_SHOPGOODS,
  RECEIVE_SHOPINFO,
  RECEIVE_SHOPRATINGS
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
  }

}
