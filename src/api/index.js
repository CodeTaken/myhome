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
// todo 请求商家列表
export const reqShopsList =() =>ajax('/shoplist')



// 商家页
// todo 获取商家商品信息
export const reqShopGoods =(id)=>ajax('/shopGoods',id)
// todo 获取商家信息
export const reqShopInfo = (id) =>ajax('/shopInfo',id)
// todo 获取商家评价
export const reqShopRatings =(id) =>ajax('/shopRatings',id)






// 通用接口，表明请求成功
export const reqTipsApi = () => ajax('/tipsApi');



