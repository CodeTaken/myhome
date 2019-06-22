<template>
      <div class="BottomFrame">
        <div class="maskContent">
          <div class="maskContent-main">
            <div class="shopName">{{title}}</div>
            <div class="content">
              <div class="activity-item" v-for="(support,index) in shopInfo.supports" :key="index">
                  <span class="content-tag">
                      <span class="mini-tag activity-green">{{support.name}}</span>
                  </span>
                <span class="activity-content">{{support.content}}</span>
              </div>
            </div>
          </div>
          <div class="closeMask">
            <i class="iconfont icon-guanbi1" @click="closeMask"></i>
          </div>
        </div>

      </div>


</template>

<script>
    export default {
        props:{
          shopInfo:Object,
          title:String
        },
        data () {
            return {
              msg:'this is msg'
            }
        },
      methods:{
        closeMask(){
            this.$emit('closeBottomMask',this.msg)
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/common.css";
.BottomFrame{
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background:rgba(0,0,0,.6)
}
.maskContent{
  position: absolute;
  bottom:0;
  width:100%;
  margin:0 auto;
}
.content{
  width:100%;
  height:200px;
  overflow: hidden;
}
.maskContent-main{
  width:100%;
  background:#fff;
  padding:20px 15px;
}
.icon-guanbi1{
  font-size:30px;
  color:#000;
}
.closeMask{
  position: absolute;
  right: 10px;
  top: 10px;
}

  .shopName{
    font-size:18px;
    font-weight:bold;
    text-align: center;
  }

  .activity {
    margin-bottom: 12px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 13px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
   .activity-item  {
    display: inline-block;
    border-radius: 2px;
    width: 36px;
    height: 18px;
    margin-right: 10px;
    color: #fff;
    font-style: normal;
    position: relative;
  }
  .content-tag {
    position: absolute;
    left: 0;
    top: 0;
    right: -100%;
    bottom: -100%;
    font-size: 24px;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
</style>
