<template>
    <div class="shopCartPges">
      <div class="shopHeader">
          <div class="banner">
            <img class="logo" src="" alt="">
          </div>
          <div class="shopName">金瑜川菜（中关村店）</div>
          <div class="shopMessage">
            <span>月售120单</span>
            <span>骆驼专送</span>
            <span>约30分钟</span>
            <span>距离1.5km</span>
          </div>
          <div class="flex discount">
            <p class="discountContent">
              <span>首单</span> <span>新用户下单立减17元（不与其它优惠......</span>
            </p>
            <p class="discountCount">8个优惠</p>
          </div>

      </div>
      <div class="flex shopNav">
          <div class="tab-view">
              <router-link to="/shopCart/goods" replace>点餐</router-link>
          </div>
        <div class="tab-view">
          <router-link to="/shopCart/ratings" replace>评价</router-link>
        </div>
        <div class="tab-view">
          <router-link to="/shopCart/info" replace>商家</router-link>
        </div>
      </div>

      <router-view></router-view>

    </div>
</template>

<script>
    export default {
        data () {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .shopCartPges{
    background:#fff;
  }
.banner{
  background:#ddd;
  height:120px;
  position: relative;
  margin-bottom:40px;
}
.logo{
  position: absolute;
  bottom:-30px;
  width:60px;
  height:60px;
  background:#fff;
  left:50%;
  transform: translateX(-50%);
}
.shopName{
  font-size:18px;
  font-weight:bold;
  text-align: center;
}
.shopMessage{
  font-size:14px;
  text-align: center;
  color:#aeaeae;
}
.discount{
  width:85%;
  margin:0 auto;
  border:1px solid #aeaeae;
  padding:2px 10px;
  justify-content: space-between;
}
.discountContent{
  width:220px;
  overflow: hidden;
  height:24px;
}
.discountCount{
  width:80px;
  text-align: right;
  position: relative;
  padding-right:14px;
}
.discountCount:after{
  content:'';
  position: absolute;
  width:0;
  height:0;
  border-left:6px solid transparent;
  border-right:6px solid transparent;
  border-top:10px solid #333;
  top:50%;
  transform: translateY(-50%);
}

.tab-view{
  flex: 1;
  text-align: center;
  font-size:16px;
  margin-top:10px;
  border-bottom:1px solid #ddd;
  padding:4px 0;
}
.tab-view a{
  display: inline-block;
  height:100%;
  border-bottom:2px solid transparent;
}
.tab-view .router-link-active{
  color: #f2b644;
  border-bottom:2px solid #f2b644;
}

</style>
