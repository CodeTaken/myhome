<template>
    <div>
        <div class="flex goodsPage">
          <div class="leftNav nav-wrapper">
            <ul class="NavContent content">
              <li :class="index == getIndex ? 'active':''" v-for="(good ,index) in goods" :key="index" @click="slideBy(index)">
                <img class="img_auto goodsIcon" :src="good.icon" alt="" v-if="good.icon">
                {{good.name}}</li>
            </ul>
          </div>
          <div class="rightList goods-wrapper">
            <ul class="content">
              <li v-for="(good ,index) in goods" :key="index" ref="foodTitle">
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
                      <div class="goodsPrice clearFloat">￥{{food.price}} <CartControl :food="food"  class="cartControl" /></div>

                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <UserCart />
    </div>

</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import CartControl from '../../../components/CartControl/CartControl.vue'
  import UserCart  from '../../../components/UserCart/UserCart.vue'
    export default {
        name: "ShopGoods",
        data(){
            return {
                nav_wrapper:'',
                goods_wrapper:'',
                top:[],
                currentIndex:0,
                scrollY:0,
            }
        },
      components:{
        CartControl,
        UserCart
      },
      mounted(){
        this.$store.dispatch('getShopGoods',2)

        //滚动联调  首先获取各个元素的高度,等滚动到那里时可获取 到下标来改变左侧的tab，点击左侧的tab,得到下标，滚动到具体位置。
      },
      watch:{
          goods(value){
              this.$nextTick(() => {
                this._Init_navWrapper();
                this._getHeight();


              })
          }
      },
      computed:{
        ...mapState(['goods','info']),
        getIndex(){
            const {top ,scrollY } = this;
            let index = this.top.findIndex((value,index)=>{
              return scrollY >= value &&  scrollY<top[index +1]
            });
          return index
        }
      },
      methods:{
          _Init_navWrapper(){
              if(!this.nav_wrapper)  this.nav_wrapper = new BScroll('.nav-wrapper');
              if(!this.goods_wrapper) this.goods_wrapper = new BScroll('.goods-wrapper',{
                startY:true,
                probeType:2
              });

            this.goods_wrapper.on('scroll',(distance)=>{
                  //console.log(distance.y);
                 this.scrollY = Math.abs(distance.y)
              })
            this.goods_wrapper.on('scrollEnd', ({x, y}) => {
              this.scrollY = Math.abs(y)
              console.log('scrollEnd',this.scrollY)
            })

          },
        _getHeight(){
              // 获取右侧的高度
          let height = [],top=0;
          height.push(top)
          this.$refs.foodTitle.forEach((value,index) =>{
              top +=value.clientHeight;
              height.push(top)
          })
          this.top = height
        },
        slideBy(value){
            const top = this.top[value]
            this.currentIndex = value;
            this.goods_wrapper.scrollTo(0, -top,200)
        }
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
  .cartControl{
    float: right;
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

  .goodsCode li:last-child{
    border-bottom:none;
  }
</style>
