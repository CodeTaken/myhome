<template>
    <div>
        <div class="flex goodsPage">
          <div class="leftNav nav-wrapper">
            <ul class="NavContent content">
              <li class="active"><i class=""></i>优惠</li>
              <li><i class=""></i>折扣</li>
              <li><i class=""></i>香浓甜粥</li>
              <li><i class=""></i>营养咸粥</li>
              <li><i class=""></i>爽口凉菜</li>
              <li><i class=""></i>精选套餐</li>
              <li><i class=""></i>小吃主食</li>
              <li><i class=""></i>果味饮料</li>
            </ul>
          </div>
          <div class="rightList goods-wrapper">
            <ul class="content">
              <li>
                <h3 class="types">优惠</h3>
                <ul class="goodsCode">
                  <li class="flex">
                    <div class="goodsImg"></div>
                    <div class="goodsInfo">
                      <div class="goodsName">南瓜粥</div>
                      <div class="goodstype">甜粥</div>
                      <div class="goodsDesc">
                        <span>月售90份</span>
                        <span>好评率100%</span>
                      </div>
                      <div class="goodsPrice">￥10</div>
                    </div>
                  </li>
                  <li class="flex">
                    <div class="goodsImg"></div>
                    <div class="goodsInfo">
                      <div class="goodsName">南瓜粥</div>
                      <div class="goodstype">甜粥</div>
                      <div class="goodsDesc">
                        <span>月售90份</span>
                        <span>好评率100%</span>
                      </div>
                      <div class="goodsPrice">￥10</div>
                    </div>
                  </li>
                  <li class="flex">
                    <div class="goodsImg"></div>
                    <div class="goodsInfo">
                      <div class="goodsName">南瓜粥</div>
                      <div class="goodstype">甜粥</div>
                      <div class="goodsDesc">
                        <span>月售90份</span>
                        <span>好评率100%</span>
                      </div>
                      <div class="goodsPrice">￥10</div>
                    </div>
                  </li>
                  <li class="flex">
                    <div class="goodsImg"></div>
                    <div class="goodsInfo">
                      <div class="goodsName">南瓜粥</div>
                      <div class="goodstype">甜粥</div>
                      <div class="goodsDesc">
                        <span>月售90份</span>
                        <span>好评率100%</span>
                      </div>
                      <div class="goodsPrice">￥10</div>
                    </div>
                  </li>
                  <li class="flex">
                    <div class="goodsImg"></div>
                    <div class="goodsInfo">
                      <div class="goodsName">南瓜粥</div>
                      <div class="goodstype">甜粥</div>
                      <div class="goodsDesc">
                        <span>月售90份</span>
                        <span>好评率100%</span>
                      </div>
                      <div class="goodsPrice">￥10</div>
                    </div>
                  </li>
                  <li class="flex">
                    <div class="goodsImg"></div>
                    <div class="goodsInfo">
                      <div class="goodsName">南瓜粥</div>
                      <div class="goodstype">甜粥</div>
                      <div class="goodsDesc">
                        <span>月售90份</span>
                        <span>好评率100%</span>
                      </div>
                      <div class="goodsPrice">￥10</div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="shopCart"></div>
    </div>

</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name: "ShopGoods",
      mounted(){

        new BScroll('.nav-wrapper');
        new BScroll('.goods-wrapper')


      }
    }
</script>

<style scoped>
  .goodsPage{
    align-items: flex-start;
    display: flex;
    position: absolute;
    top: 292px;
    bottom: 46px;
    width: 100%;
    background: #fff;
    overflow: hidden;
  }
  .leftNav{
    width:100px;
    height:100%;
    background:#f5f5f5;

  }
  .NavContent li{
    padding:0 10px;
  }
  .leftNav li{
    text-align: center;
    padding:10px 0;
    border-bottom:1px solid #ddd;
  }
  .leftNav li:last-child{
    border-bottom:none;
  }
  .rightList{
    width:calc(100% - 100px);
    height:100%;
  }
  .goodsDesc span{
    margin-right:10px;
  }
  .goodsDesc span:last-child{
    margin-right:0;
  }
  .goodsPrice{
    font-size:15px;
    color:#f80000;
  }
  .types{
    background:#f5f5f5;
    border-left:5px solid #ddd;
    padding-left:10px;
  }
  .goodsCode{
    padding-left:10px;
  }
  .goodsCode li{
    padding:10px 0;
    border-bottom:1px solid #ddd;
  }
  .goodsImg{
    width:80px;
    height:80px;
    background:#ddd;
  }
  .goodsInfo{
    flex:1;
    padding:0 10px;
  }
  .NavContent .active{
    background:#fff;
  }

  .goodsName{
    font-size:15px;
    font-weight:bold;
  }
  .shopCart{
    background:#000;
    position: fixed;
    bottom:0;
    height:46px;
    width:100%;
  }
</style>
