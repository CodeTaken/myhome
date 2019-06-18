<template>
  <div class="shopMoudle">
    <div class="" v-for="(shopItem , index) in shopList" :key="index">
      <router-link :to="{name: 'ShopCart', params: { id: shopItem.id } }" class="flex shopItem" href="javascript:">
        <div class="shopMessage">
        <div class="shopName">{{shopItem.name}}   <span class="take-outFood" v-if="shopItem.rating">{{shopItem.rating}}</span></div>
        <div class="shopsInfo clearFloat">
          <span class="grade">{{shopItem.score}}分</span> | <span class="gradeBasic">起送价￥{{shopItem.minPrice}}</span> | <span class="gradeBasic">配送费￥{{shopItem.deliveryPrice}}</span>
          <div class="time">{{shopItem.deliveryTime}}分钟送达</div>
        </div>
        <div class="discountContent"> <span class="discount discountOne" :class="supportClasses[shopItem.supports[0].type]">{{shopItem.supports[0].name}}</span>{{ shopItem.supports[0].content}}</div>
        <div class="flex condition">
          <span class="conditionItem" v-for="(item , index ) in shopItem.service" :key="index">{{item}}</span>
        </div>
      </div>
        <div class="flex shopImg">
          <div class="shopImgItem" v-for="(goods , index ) in shopItem.goodList" :key="index">
            <div class="shopImgContent">
              <img class="img_auto" :src="goods.goodImg" alt="">
              <div class="price">￥{{goods.price}}</div>
            </div>
            <div class="foodName">{{goods.goodName}}</div>
          </div>
        </div>       

      </router-link>



    </div>

  </div>
</template>

<script>
    export default {
        props:{
            shopList:Array
        },
        data () {
            return {
              supportClasses: ['activity-green', 'activity-red', 'activity-orange'],
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .shopMoudle{
    padding:0 10px;
    padding-bottom:60px;
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
  .discountContent{
    font-size:12px;
  }
  .discountOne{
    background:linear-gradient(to right , #ed7150, #ea5741);
  }
  .activity-green{
    background:linear-gradient(to right , #a73b4d, #f80000);
  }
  .activity-red{
    background:linear-gradient(to right , #ed7150, #ea5741);
  }
  .activity-orange{
    background:linear-gradient(to right , #f7d171, #f2b644);
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
    background:linear-gradient(to bottom ,rgba(0,0,0,0) 70%, rgba(0,0,0,0.2));
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
