<template>
    <div class="shopCartPges">
      <div class="shopHeader">
          <div class="banner">
            <img class="logo" src="" alt="" @click="closeMask">
          </div>
          <div class="shopName">{{info.name}}</div>
          <div class="shopMessage">
            <span>月售{{info.sellCount}}单</span>
            <span>{{info.description}}</span>
            <span>约{{info.deliveryTime}}分钟</span>
            <span>距离{{info.distance}}</span>
          </div>
          <div class="flex discount" v-if="info.supports" @click="closeBottomMask">
            <p class="discountContent ellipsis" >
              <span >{{info.supports[0].name}}</span> <span class="">{{info.supports[0].content}}</span>
            </p>
            <p class="discountCount" v-if="info.supports.length>0">{{info.supports.length}}个优惠</p>
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

      <keep-alive>
        <router-view></router-view>
      </keep-alive>




      <transition name="fade">
       <CenterFrame class="centerFrame" @closeMask="closeMask" :shopInfo="info" v-if="mask" />
      </transition>

      <!--优惠活动-->
      <transition name="fade">
        <BottomFrame class="centerFrame" @closeBottomMask="closeBottomMask" :title="title" :shopInfo="info" v-if="maskBottom" />
      </transition>


    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import CenterFrame from '../../components/CenterFrame/CenterFrame.vue'
  import BottomFrame from '../../components/BottomFrame/BottomFrame.vue'

    export default {
        data () {
            return {
              mask:false,
              maskBottom:false,
              title:'优惠活动'
            }
        },
      components:{
        CenterFrame,
        BottomFrame
      },
      mounted(){
        this.$store.dispatch('getShopInfo',2)
        this.$store.dispatch('getShopRatings',2)
      },
      computed:{
        ...mapState(['goods','info','ratings'])
      },
      methods:{
        closeMask(data){
            console.log(data);
            this.mask= !this.mask
        },
        closeBottomMask(){
          this.maskBottom= !this.maskBottom
        }
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


  .centerFrame.fade-enter-active,.centerFrame.fade-leaver-active{
    transition: opacity 2s;
  }
  .centerFrame.fade-enter,.centerFrame.fade-leaver-to{
    transition: 0s;
  }

</style>
