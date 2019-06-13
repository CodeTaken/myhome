import ajax from './axios'

const BASE_URL = '/api'
//
// 登录接口
// todo  密码提交表单
export const reqPwdForm = ({name,pwd}) => ajax('/tipsApi',{name,pwd},"POST");
// todo  获取用户信息
export const reqUserInfo = () => ajax('/userInfo');
// todo  获取验证码
export const reqPhoneCode = ({identificationValue,isEmail,isPhone,userid}) =>ajax(BASE_URL+'/default/RegisterIdentification/Linkedin-MarketingCloud',{identificationValue,isEmail,isPhone,userid},"POST")

//首页广告
// todo 获取广告
export const reqPageAd = () =>ajax('/reqAd');





// 通用接口，表明请求成功
export const reqTipsApi = () => ajax('/tipsApi');



