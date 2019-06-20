import Mock from 'mockjs'
import data from './data'

Mock.mock('/tipsApi', {code:0, data: data.tipsApi})
Mock.mock('/userInfo',{code:0,data:data.userInfo})
Mock.mock('/reqAd',{code:0,data:data.ad})
Mock.mock('/shoplist',{code:0,data:data.shopList})

Mock.mock('/shopGoods',{code:0,data:data.goods})
Mock.mock('/shopInfo',{code:0,data:data.info})
Mock.mock('/shopRatings',{code:0,data:data.ratings})


