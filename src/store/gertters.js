// 基于 state 的计算属性  如购物车的总金额、总数目
export default {
  satisfiedNum(state){
    const number = state.ratings.filter((rating)=>{
      return rating.rateType == 0
    })
    return number.length
  },
}
