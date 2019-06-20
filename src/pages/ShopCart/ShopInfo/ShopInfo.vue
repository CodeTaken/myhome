<template>
    <div class="shop-info">
      <section class="section" style="pointer-events: auto;">
          <h3 class="section-title">配送信息</h3>
          <div class="delivery">
              <div>
                  <span class="delivery-icon">{{info.description}}</span>
                  <span>由商家配送提供配送，约{{info.deliveryTime}}分钟送达，距离{{info.distance}}</span>
              </div>
             <div class="delivery-money">配送费￥{{info.deliveryPrice}}</div>
          </div>
      </section>
      <div class="split" style="pointer-events: auto;"></div>
      <section class="section" style="pointer-events: auto;">
          <h3 class="section-title">活动与服务</h3>
          <div class="activity">
            <div class="activity-item" v-for="(support , index) in info.supports" :key="index">
                <span class="content-tag">
                    <span class="mini-tag" :class="discount[support.type]">{{support.name}}</span>
                </span>
                <span class="activity-content">{{support.content}}</span>
            </div>
          </div>
      </section>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
        name: "ShopGoods",
      data () {
        return {
            discount:['activity-green','activity-orange','activity-hot']
        }
      },
      computed:{
        ...mapState(['info'])
      }
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
  .activity-green{
    background:#337E00;
    border-radius: 6px;
  }
  .activity-orange{
    background:#f2b644;
    border-radius:6px;
  }
  .activity-hot{
    background:#f80000;
    border-radius: 6px;
  }
</style>
