<template>
  <swiper :options="ad.options" ref="mySwiper" class="swiperModule">
    <!-- slides -->
    <swiper-slide v-for="(adItem,index) in ad.data" :key="index">
      <img :src="adItem" class="img_auto" alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
    <!--<div class="swiper-button-next" slot="button-next"></div>-->
    <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
  </swiper>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
      props:{
          ad:Object
      },
        data () {
            return {
            }
        },
      mounted() {
        console.log('this is current swiper instance object', this.swiper)
        //this.swiper.slideTo(3, 1000, false)
      },
      components:{
        swiper,
        swiperSlide
      },
      computed:{
        swiper() {
          return this.$refs.mySwiper.swiper
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiperModule{
  min-height:80px;
  background:#fff;
}
</style>

<style>
  .swiperModule .my-bullet-active{
    background:#fff;
    opacity: 1;
  }
  .swiper-pagination-bullet{
    background:#fff;
    opacity:0.5;
  }
</style>
