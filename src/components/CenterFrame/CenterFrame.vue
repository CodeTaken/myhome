<template>

      <div class="CenterFrame">
        <div class="maskContent">
          <div class="maskContent-main">
            <div class="shopName"> <span class="code">品牌</span> <span class="name">{{shopInfo.name}}</span></div>
            <h3>店家介绍</h3>
            <div class="descript:;">{{shopInfo.bulletin}}</div>
          </div>
          <div class="closeMask">
            <i class="iconfont icon-guanbi1" @click="closeMask"></i>
          </div>
        </div>
        <div class=""></div>
      </div>


</template>

<script>
    export default {
        props:{
            shopInfo:Object
        },
        data () {
            return {
              msg:'this is msg'
            }
        },
      methods:{
        closeMask(){
            this.$emit('closeMask',this.msg)
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/common.css";
.CenterFrame{
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
  width:80%;
  min-height:100px;
  margin:0 auto;
}
.maskContent-main{
  width:100%;
  background:#fff;
  border-radius: 10px;
  padding:20px 15px;
}
.icon-guanbi1{
  font-size:30px;
  color:#fff;
}
.closeMask{
  text-align: center;
  margin:20px auto;
}
.code{
  padding:2px 8px;
  font-size:12px;
  background:linear-gradient(to right , #f7d171, #f2b644);
  border-radius:4px;
}
  .shopName{
    font-size:16px;
    font-weight:bold;
  }
</style>
