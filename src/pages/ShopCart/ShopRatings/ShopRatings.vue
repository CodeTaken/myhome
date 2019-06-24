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
            <mt-button class="rating-type active" size="small">全部 24</mt-button>
            <mt-button class="rating-type" size="small">满意 24</mt-button>
            <mt-button class="rating-type" size="small">不满意 24</mt-button>

            <mt-checklist
              v-model='checkValue'
              :options="['只看有内容的评价']">
            </mt-checklist>
          </div>
          <ul class="ratings-profiles">
            <li class="rating-item">
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
                  <p class="text">不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.</p>
                  <div class="recommend">
                    <span class="iconfont icon-zan1"></span>
                    <span class="item">南瓜粥</span>
                    <span class="item">皮蛋瘦肉粥</span>
                    <span class="item">扁豆焖面</span>
                    <span class="item">娃娃菜炖豆腐</span>
                    <span class="item">牛肉馅饼</span>
                  </div>
                  <div class="time">2016-07-23 21:52:44</div>
                </div>
            </li>

            <li class="rating-item">
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
                <p class="text">不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.</p>
                <div class="recommend">
                  <span class="iconfont icon-zan1"></span>
                  <span class="item">南瓜粥</span>
                  <span class="item">皮蛋瘦肉粥</span>
                  <span class="item">扁豆焖面</span>
                  <span class="item">娃娃菜炖豆腐</span>
                  <span class="item">牛肉馅饼</span>
                </div>
                <div class="time">2016-07-23 21:52:44</div>
              </div>
            </li>

            <li class="rating-item">
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
                <p class="text">不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.</p>
                <div class="recommend">
                  <span class="iconfont icon-zan1"></span>
                  <span class="item">南瓜粥</span>
                  <span class="item">皮蛋瘦肉粥</span>
                  <span class="item">扁豆焖面</span>
                  <span class="item">娃娃菜炖豆腐</span>
                  <span class="item">牛肉馅饼</span>
                </div>
                <div class="time">2016-07-23 21:52:44</div>
              </div>
            </li>

            <li class="rating-item">
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
                <p class="text">不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.</p>
                <div class="recommend">
                  <span class="iconfont icon-zan1"></span>
                  <span class="item">南瓜粥</span>
                  <span class="item">皮蛋瘦肉粥</span>
                  <span class="item">扁豆焖面</span>
                  <span class="item">娃娃菜炖豆腐</span>
                  <span class="item">牛肉馅饼</span>
                </div>
                <div class="time">2016-07-23 21:52:44</div>
              </div>
            </li>



          </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShopGoods",
      data(){
          return{
            checkValue:[]
          }
      }
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
