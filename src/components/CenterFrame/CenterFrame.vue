<template>
    <div class="CenterFrame">
      <div class="maskContent">
          <div class="maskContent-main">
              <div>Name</div>
              <div>Intro</div>
          </div>
          <div class="closeMask">
            <i class="iconfont icon-guanbi1"></i>
          </div>
      </div>
      <div class=""></div>
    </div>
</template>

<script>
    export default {
        data () {
            return {}
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
}
.icon-guanbi1{
  font-size:30px;
  color:#fff;
}
.closeMask{
  text-align: center;
  margin:20px auto;
}
</style>
