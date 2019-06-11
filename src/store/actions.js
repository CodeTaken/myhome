import {RECEIVE_USERINFO,RESER_USERINFO} from './mutations-types'
import {reqPwdForm,reqUserInfo} from '../api/index'


export default {
  // 同步记录用户信息
  recordUser({commit}, userInfo) {
    console.log(userInfo);
    commit(RECEIVE_USERINFO, userInfo)
  },
  // 同步获取用户信息
  async ressetUser({commit}, userInfo) {
    console.log(userInfo);
    const result = await reqUserInfo()
    if(result.code ===0 && localStorage.getItem("userInfo")){
      console.log('get>>>>userInfo');
      console.log(localStorage.getItem("userInfo"));
      const userInfo = result.data;
      commit(RESER_USERINFO, userInfo)
    }
  },
}



