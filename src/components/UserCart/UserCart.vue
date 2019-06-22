<template>
    <div class="shopCart">
        <div class="flex content">
          <div class="content-left">
                <span class="flex cart" @click="toggleCart"><i class="iconfont icon-gouwucheman"></i> <i class="num" v-if="userCart.length">{{userCart.length}}</i></span>
          </div>
          <div class="flex content-right">
            <span v-if="userCart.length==0">{{info.minPrice}}元起送</span>
            <span v-else-if="total < info.minPrice">还差{{ info.minPrice - total }}元起送</span>
            <span v-else>{{total}}元</span>

          </div>
        </div>
        <div class="userCartList" v-if="userCart.length>0 & cartStatus">
            <div class="flex list-header"><h1 class="title">购物车</h1> <span @click="clearUserCart" class="empty">清空</span></div>
           <div class="list-content">
              <ul>
                  <li class="food" v-for="(food,index) in userCart" :key="index">
                      <span class="name">{{food.name}}</span>
                      <div class="price">
                          <span>￥{{food.price * food.count}}</span>
                      </div>
                      <CartControl :food="food" />
                  </li>
              </ul>
           </div>
        </div>
    </div>
</template>

<script>
  import CartControl from '../CartControl/CartControl.vue'
    import {mapState} from 'vuex'
    export default {
        data () {
            return {
                cartStatus:false
            }
        },
      components:{
        CartControl
      },
      computed:{
        ...mapState(['info','userCart']),
        total(){
            let total = 0;
            this.userCart.forEach((value,index)=>{
                //console.log(value.price);
              total += value.price * value.count
            });
            return total
        }
      },
      methods:{
        toggleCart(){
            this.cartStatus = !this.cartStatus
        },
        clearUserCart(){
          this.$store.dispatch('clearCart')
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .shopCart{
    position: fixed;
    bottom: 0;
    height: 48px;
    width: 100%;
  }
  .content{
    background: #141d27;
    height:100%;
  }
  .userCartList{
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    -webkit-transform: translateY(-100%);
     transform: translateY(-100%);
  }

  .content .content-left{
    flex: 1;
  }
  .content .content-right{
    flex: 0 0 105px;
    width: 105px;
    color:#fff;
    text-align: center;
    height:100%;
    background:#2b333b;
  }

   .list-header{
    height: 40px;
    line-height: 40px;
    padding: 0 18px;
    background: #f3f5f7;
    border-bottom: 1px solid rgba(7,17,27,0.1);
    justify-content: space-between;
  }
  .list-header .title{
    float: left;
    font-size: 14px;
    color: #07111b;
  }
  .list-header .empty {
    float: right;
    font-size: 12px;
    color: #00a0dc;
  }
  .list-content{
    padding: 0 18px;
    max-height: 124px;
    overflow: auto;
    background: #fff;
  }
   .list-content .food{
    position: relative;
    padding: 12px 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: none;
     display: flex;
     align-items: center;
     justify-content: space-between;
     border-bottom:1px solid #eaeaea;
  }
  .list-content .food .name{
    line-height: 24px;
    font-size: 14px;
    color: #07111b;
  }
  .food .price{
    /*position: absolute;*/
    /*right: 90px;*/
    /*bottom: 12px;*/
    line-height: 24px;
    font-size: 14px;
    font-weight: 700;
    color: #f01414;
  }


  .cart{
    height:56px;
    width:56px;
    border-radius: 50%;
    background:#2b343c;
    margin-left:20px;
    position: relative;
    border:6px solid #141d27;
    top:-6px;
  }
  .num{
    position: absolute;
    right:0;
    top:0;
    font-weight:bold;
    font-style: normal;
    width: 24px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    border-radius: 16px;
    font-size: 9px;
    color: #fff;
    background: #f01414;
    -webkit-box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
  }
  .icon-gouwucheman{
    font-size:24px;
    color:#80858a;

  }
</style>
