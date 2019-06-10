<template>
    <div class="footer c-flex">
        <div class="footerItem c-flex" :class="{active: '/home' === $route.path}" @click="goPath('/home')">
          <i class="iconfont icon-shouye c-iconfont-20"></i>
          <span>首页</span>
        </div>
        <div class="footerItem c-flex" :class="{active: '/order' === $route.path}" @click="goPath('/order')">
          <i class="iconfont icon-dingdan c-iconfont-20"></i>
          <span>首页</span>
        </div>
        <div class="footerItem c-flex" :class="{active: '/shopCart' === $route.path}" @click="goPath('/shopCart')">
          <i class="iconfont icon-gouwucheman c-iconfont-20"></i>
          <span>购物车</span>
        </div>
        <div class="footerItem c-flex" :class="{active: '/profile' === $route.path}" @click="goPath('/profile')">
          <i class="iconfont icon-wodedangxuan c-iconfont-20"></i>
          <span>我的</span>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        },
      methods:{
            goPath(path){
                this.$router.replace(path)
            }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/css/common.css";
  .footer{
    position: fixed;
    bottom:0;
    width:100%;
    font-size:14px;
    background:#f5f5f5;
  }
  .footerItem{
    flex:1;
    flex-direction: column;
    align-items: center;
    border-top:1px solid #eee;
    padding:6px 0;
  }
  .footerItem.active{
    color:#f80000;
  }
  .footerItem.active .iconfont{
    color:#f80000;
  }
</style>
