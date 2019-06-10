<template>
    <div class="profileModule">
        <div class="flex userMoudle" @click="goPath('/login')">
            <div class="flex userImg">
              <i class="iconfont icon-renwu-ren userIcon"></i>
            </div>
            <div class="userMessage">
                <div class="">登录/注册</div>
                <div class=""><i class="iconfont icon-shouji"></i>暂无绑定手机号</div>
            </div>
            <i class="iconfont icon-youjiantou rightIcon"></i>
        </div>

        <div class="profileList">
            <div class="profileItem">
              <i class="iconfont icon-tianchongxing-"></i>
              <div class="right">
                <span class="profileName box-bottom">我的订单</span>
                <i class="iconfont icon-youjiantou iconListRight fr"></i>
              </div>
            </div>
            <div class="profileItem">
              <i class="iconfont icon-yly_jifenshangcheng"></i>
              <div class="right">
                <span class="profileName box-bottom">积分商城</span>
                <i class="iconfont icon-youjiantou iconListRight fr"></i>
              </div>
            </div>
            <div class="profileItem no-bottom">
              <i class="iconfont icon-shoucang1"></i>
              <div class="right">
                <span class="profileName box-bottom">我的收藏</span>
                <i class="iconfont icon-youjiantou iconListRight fr"></i>
              </div>
            </div>
            <div height="10" style="height:10px;"></div>
            <div class="profileItem">
              <i class="iconfont icon-fuwu"></i>
              <div class="right">
                <span class="profileName box-bottom">服务中心</span>
                <i class="iconfont icon-youjiantou iconListRight fr"></i>
              </div>
            </div>

            <div class="profileItem no-bottom">
              <i class="iconfont icon-yijianfankui"></i>
              <div class="right">
                <span class="profileName box-bottom">意见反馈</span>
                <i class="iconfont icon-youjiantou iconListRight fr"></i>
              </div>
            </div>

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
              this.$router.push(path);
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.userMoudle{
  background:#5fcbb6;
  padding:20px 10px;
}
  .userMessage{
    color:#fff;
    flex:1;
  }
  .userImg{
    width:80px;
    height:80px;
    border-radius: 50%;
    border:1px solid #ddd;
    margin-right:20px;
  }

  .rightIcon{
    font-size:20px;
    color:#fff;
    width:30px;
  }
  .userIcon{
    font-size:40px;
  }
  .userImg{
    background:#eaeaea;
  }


  .profileItem{
    background:#fff;
    padding:5px 10px;
    display: flex;
  }
  .right{
    flex:1;
    margin-left:4px;
    border-bottom:1px solid #ddd;
    padding-bottom:4px;
  }
  .profileList .profileItem.no-bottom .right{
     border-bottom:0;
  }
</style>
