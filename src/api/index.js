import ajax from './axios'



// 登录接口
// todo  密码提交表单
export const reqPwdForm = ({name,pwd}) => ajax('/tipsApi',{name,pwd},"POST");

// todo  获取用户信息
export const reqUserInfo = () => ajax('/userInfo');


// 通用接口，表明请求成功
export const reqTipsApi = () => ajax('/tipsApi');



