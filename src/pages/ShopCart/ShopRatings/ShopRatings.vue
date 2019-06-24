<template>
    <div class="ratings">
        <div class="flex shopRatings">
            <div class="leftRatings">
                <h3>4.2</h3>
              <p>综合评分</p>
              <p class="compus">高于周边商家99%</p>
            </div>
            <div class="rightRatings">
              星星
            </div>
        </div>
      <div class="split" style="pointer-events: auto;"></div>
        <div class="userRatings">
          <div class="ratingsBtn">
            <mt-button class="rating-type" size="small" @click="toggleRatings(0)" :class="{active:ratingIndex ==0}">全部 {{ratings.length}}</mt-button>
            <mt-button class="rating-type" size="small" @click="toggleRatings(1)" :class="{active:ratingIndex ==1}">满意 {{satisfiedNum}}</mt-button>
            <mt-button class="rating-type" size="small" @click="toggleRatings(2)" :class="{active:ratingIndex ==2 }">不满意 {{ ratings.length-satisfiedNum}}</mt-button>

            <mt-checklist
              v-model='checkValue'
              :options="['只看有内容的评价']">
            </mt-checklist>
          </div>
          <ul class="ratings-profiles">
            <li class="rating-item" v-for="(rating,index) in filterRatings" :key="index">
                <div class="avatar">
                  <img width="28" height="28" src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png">
                </div>
                <div class="content">
                    <h1 class="name">3******c</h1>
                    <div class="star-wrapper">
                      <div class="star star-24">
                        <span class="star-item on"></span>
                        <span class="star-item on"></span>
                        <span class="star-item on"></span>
                        <span class="star-item on"></span>
                        <span class="star-item on"></span>
                      </div>
                      <span class="delivery">30</span>
                    </div>
                  <p class="text">{{rating.text}}</p>
                  <div class="recommend">
                    <span class="iconfont icon-zan1" v-if="rating.rateType == 0"></span>
                    <span class="iconfont icon-chaping" v-else-if="rating.rateType == 1"></span>

                    <span class="item" v-for="(item,index) in rating.recommend" :key="index">{{item}}</span>
                  </div>
                  <div class="time">{{time(rating.rateTime)}}</div>
                </div>
            </li>




          </ul>
        </div>
    </div>
</template>

<script>
  import {mapState,mapGetters} from 'vuex'
    export default {
        name: "ShopGoods",
      data(){
          return{
            checkValue:[],
            ratingIndex:0
          }
      },
      computed:{
        ...mapState(['ratings']),
        ...mapGetters(['satisfiedNum']),
        filterRatings(){
          // 改变了index，通过计算属性来过滤数据。
          // todo ratingIndex == 0     && rateType==0 && && rateType==1  返回全部数据
          // todo ratingIndex == 1     && rateType==0   返回 满意的数据
          // todo ratingIndex == 2     && rateType==1   返回 不满意的数据
          let data;
          if(this.ratingIndex == 0){
            data = this.ratings
          }else if(this.ratingIndex == 1){
            data = this.ratings.filter((value)=>{
              return value.rateType == 0
            })
          }else{
            data = this.ratings.filter((value)=>{
              return value.rateType ==1
            })
          }

          // todo 是否选择了checkbox
          this.checkValue.length >0?(data = data.filter((value)=>{
            return value.text.length>0
          })):''
          return data
        }
      },
      methods:{
        toggleRatings(value){
          this.ratingIndex = value;
        },
        time(time = +new Date()){
          var date = new Date(time + 8 * 3600 * 1000);
          return date.toJSON().substr(0, 19).replace('T', ' ').replace(/-/g, '-');
        }
      },
    }
</script>

<style>
.shopRatings,.userRatings{
  padding:20px;
}
.leftRatings{
  text-align: center;
  border-right:1px solid #eaeaea;
  width:140px;
}
.rightRatings{
  flex:1;
}
.split {
  width: 100%;
  height: 16px;
  border-top: 1px solid rgba(7,17,27,0.1);
  border-bottom: 1px solid rgba(7,17,27,0.1);
  background: #f3f5f7;
}
  .compus{
    color:#999;
  }
  .leftRatings h3{
    font-size:24px;
    color:#f2b644;
  }

 .rating-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 18px 0;
  position: relative;
  border: none;
   border-bottom:1px solid #eaeaea;
}
 .ratings-profiles .rating-item:last-child{
   border-bottom:none
 }

.rating-item .avatar {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 28px;
  flex: 0 0 28px;
  width: 28px;
  margin-right: 12px;
}
.rating-item .avatar img {
  border-radius: 50%;
}
.rating-item .content {
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.rating-item .content .name {
  margin-bottom: 4px;
  line-height: 12px;
  font-size: 10px;
  color: #07111b;
}
.rating-item .content .text {
  margin-bottom: 8px;
  line-height: 18px;
  color: #07111b;
  font-size: 12px;
}
.rating-item .content .recommend {
  line-height: 16px;
  font-size: 0;
}
.rating-item .content .time {
  position: absolute;
  top: 0;
  right: 0;
  line-height: 12px;
  font-size: 10px;
  color: #93999f;
}
 .rating-item .content .recommend .icon-zan1, .rating-item .content .recommend .icon-zan1, .rating-item .content .recommend .item {
  display: inline-block;
  margin: 0 8px 4px 0;
  font-size: 9px;
}
.rating-item .content .recommend .icon-zan1 {
  color: #f5a100;
}
.rating-item .content .recommend .icon-chaping{
  color:#ddd;
}
.rating-item .content .recommend .item {
  padding: 0 6px;
  border: 1px solid rgba(7,17,27,0.1);
  border-radius: 1px;
  color: #93999f;
  background: #fff;
}
.ratingsBtn .rating-type{
  margin-right:10px;
  border: 1px solid #eaeaea;
}

.ratingsBtn .rating-type.active {
  background: #02a774;
  color: #fff;
}
.ratingsBtn .mint-cell:last-child,.mint-cell-wrapper{
  background:none;
}
</style>
