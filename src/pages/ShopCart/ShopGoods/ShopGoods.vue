<template>
    <div>
        <div class="flex goodsPage">
          <div class="leftNav nav-wrapper">
            <ul class="NavContent content">
              <li class="active" v-for="(good ,index) in goods" :key="index">
                <img class="img_auto goodsIcon" :src="good.icon" alt="" v-if="good.icon">
                {{good.name}}</li>
            </ul>
          </div>
          <div class="rightList goods-wrapper">
            <ul class="content">
              <li v-for="(good ,index) in goods" :key="index">
                <h3 class="types">{{good.name}}</h3>
                <ul class="goodsCode">
                  <li class="flex" v-for="(food ,index) in good.foods" :key="index">
                    <div class="goodsImg"></div>
                    <div class="goodsInfo">
                      <div class="goodsName">{{food.name}}</div>
                      <div class="goodstype">{{food.description}}</div>
                      <div class="goodsDesc">
                        <span>月售{{food.sellCount}}份</span>
                        <span>好评率{{food.rating}}%</span>
                      </div>
                      <div class="goodsPrice">￥{{food.price}}</div>
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
  import {mapState} from 'vuex'
    export default {
        name: "ShopGoods",
        data(){
            return {
                nav_wrapper:'',
                goods_wrapper:''
            }
        },
      mounted(){
        this.$store.dispatch('getShopGoods',2)
      },
      watch:{
          goods(value){
              this.$nextTick(() => {
                this._Init_navWrapper();
              })
          }
      },
      computed:{
        ...mapState(['goods'])
      },
      methods:{
          _Init_navWrapper(){
              if(!this.nav_wrapper) new BScroll('.nav-wrapper');
              if(!this.goods_wrapper) new BScroll('.goods-wrapper');
          },
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
  .goodsIcon{
    display: inline-block;
    width:10px;
  }
</style>
