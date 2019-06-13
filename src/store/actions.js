import {
  RECEIVE_USERINFO,
  RESER_USERINFO,
  RECEIVE_AD
} from './mutations-types'
import {
  reqPwdForm,
  reqUserInfo,
  reqPageAd
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
  }
}



