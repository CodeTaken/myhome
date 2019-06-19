<template>
    <div class="shop-info">
      <section class="section" style="pointer-events: auto;">
          <h3 class="section-title">配送信息</h3>
          <div class="delivery">
              <div>
                  <span class="delivery-icon">硅谷专送</span>
                  <span>由商家配送提供配送，约28分钟送达，距离1000m</span>
              </div>
             <div class="delivery-money">配送费￥4</div>
          </div>
      </section>
      <div class="split" style="pointer-events: auto;"></div>
      <section class="section" style="pointer-events: auto;">
          <h3 class="section-title">活动与服务</h3>
          <div class="activity">
            <div class="activity-item activity-green">
                <span class="content-tag">
                    <span class="mini-tag">首单</span>
                </span>
                <span class="activity-content">新用户下单立减17元(不与其它活动同享)</span>
            </div>
          </div>
      </section>
    </div>
</template>

<script>
    export default {
        name: "ShopGoods"
    }
</script>

<style scoped>
  .shop-info .section {
    padding: 16px 14px 14px;
    font-size: 16px;
    background-color: #fff;
    color: #666;
    border-bottom: 1px solid #eee;
    position: relative;
  }
  .shop-info .section .section-title {
    color: #000;
    font-weight: 700;
    line-height: 16px;
  }
  .shop-info .section .delivery {
    margin-top: 16px;
    font-size: 13px;
    line-height: 18px;
  }
  .shop-info .section .delivery .delivery-money {
    margin-top: 5px;
  }
  .shop-info .section .delivery .delivery-icon {
    width: 55px;
    font-size: 11px;
    margin-right: 10px;
    display: inline-block;
    text-align: center;
    color: #fff;
    background-color: #0097ff;
    padding: 1px 0;
    border-radius: 4px;
  }
  .shop-info .split {
    width: 100%;
    height: 16px;
    border-top: 1px solid rgba(7,17,27,0.1);
    border-bottom: 1px solid rgba(7,17,27,0.1);
    background: #f3f5f7;
  }
  .shop-info .section {
    padding: 16px 14px 14px;
    font-size: 16px;
    background-color: #fff;
    color: #666;
    border-bottom: 1px solid #eee;
    position: relative;
  }
  .shop-info .section .section-title {
    color: #000;
    font-weight: 700;
    line-height: 16px;
  }
  .shop-info .section .activity {
    margin-top: 16px;
  }
  .shop-info .section .activity .activity-item {
    margin-bottom: 12px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 13px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .shop-info .section .activity .activity-item .content-tag {
    display: inline-block;
    border-radius: 2px;
    width: 36px;
    height: 18px;
    margin-right: 10px;
    color: #fff;
    font-style: normal;
    position: relative;
  }
  .shop-info .section .activity .activity-item .content-tag .mini-tag {
    position: absolute;
    left: 0;
    top: 0;
    right: -100%;
    bottom: -100%;
    font-size: 24px;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
</style>
