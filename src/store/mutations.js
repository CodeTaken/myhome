
import {
  RECEIVE_USERINFO,
  RESER_USERINFO
} from './mutations-types'

export default {
  [RECEIVE_USERINFO] (state, userInfo) {
    state.userInfo = userInfo
    localStorage.setItem("userInfo",userInfo);
  },

  [RESER_USERINFO] (state, userInfo) {
    state.userInfo = userInfo
  },


}
