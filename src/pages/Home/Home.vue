<template>
    <div class="pageHome">
      <Swiper :ad="swip_data" />
      <div class="navabr">navbar</div>
      <div class="ad">
        广告部分
      </div>
      <ShopList :shopList="shopList" />
    </div>
</template>



<script>
  import ShopList from '../../components/ShopList/ShopList.vue'
  import Swiper from '../../components/Swiper/Swiper.vue'
  import {mapState} from 'vuex'
    export default {
        data () {
            return {}
        },
      mounted(){
        this.$store.dispatch('getAdvent')
        this.$store.dispatch('getShopList')
      },
      components:{
        ShopList,
        Swiper
      },
      computed:{
        ...mapState(['ad']),
        ...mapState(['shopList']),
        swip_data(){
            const {ad} = this
            let data = {};
            data.data= ad;
          data.options = {
            autoplay: true,
            pagination: {
              el: '.swiper-pagination',
              bulletActiveClass: 'my-bullet-active',
            },
          };
            return data
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .shopMoudle{
    padding:0 20px;
  }
  .shopItem{
    padding:10px;
    background:#fff;
    border-radius:10px;
    margin-bottom:10px;
    flex-direction: column;
  }
  .shopMessage{
    width:100%;
  }
  .shopName{
    font-size:16px;
    font-weight:bold;
    text-align: left;
    margin-right:20px;
  }
  .take-outFood{
    padding:2px 8px;
    font-size:12px;
    background:linear-gradient(to right , #f7d171, #f2b644);
    border-radius:4px;
  }
  .shopsInfo{
    font-size:12px;
    color:#999;
  }
  .grade{
    color:#f2b644;
  }
  .time{
    float: right;
  }

  .discount{
    padding:2px 6px;
    color:#fff;
    border-radius: 4px;
    margin-right:4px;
    font-size:12px;
  }

  .discountOne{
    background:linear-gradient(to right , #ed7150, #ea5741);
  }
  .condition{
    justify-content: flex-start;
    margin:6px 0;
  }
  .conditionItem{
    font-size:12px;
    padding:1px 10px;
    border-radius: 6px;
    border:1px solid #ddd;
    margin-right:10px;
  }
  .shopImg{
    width:100%;
  }
  .shopImgItem{
    flex:1;
    margin-right:10px;
  }
  .shopImg .shopImgItem:last-child{
    margin-right:0;
  }
  .shopImgContent{
    position: relative;
    border-radius: 10px;
    overflow: hidden;
  }
  .shopImgContent img{
    height:98px;
    background:#ddd;

  }
  .price{
    position: absolute;
    width:100%;
    left:0;
    top:0;
    bottom:0;
    right:0;
    display: flex;
    background:linear-gradient(to bottom ,rgba(0,0,0,0), rgba(0,0,0,0.2));
    align-items: flex-end;
    justify-content: center;
    color:#fff;
    font-weight:bold;
  }
  .foodName{
    text-align: center;
    padding:0 10px;
  }

</style>
