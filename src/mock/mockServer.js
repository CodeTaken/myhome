import Mock from 'mockjs'
import data from './data'

Mock.mock('/tipsApi', {code:0, data: data.tipsApi})
Mock.mock('/userInfo',{code:0,data:data.userInfo})
