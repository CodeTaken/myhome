<template>
    <div class="flex CartControl">
          <div class="iconfont icon-jianshao" v-if="food.count" @click="Count('dec')"></div>
          <div class="count" v-if="food.count">{{food.count}}</div>
          <div class="iconfont icon-zengjia" @click="Count('add')"></div>
    </div>
</template>

<script>
    export default {
        props:{
          food:Object
        },
        data () {
            return {
            }
        },
      methods:{
        Count(value){
            //value=="add"?(this.count++):(this.count>0?(this.count--):0)
          this.$store.dispatch('uploadCartControl',{type:value,food:this.food})
        },
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.iconfont{
  font-size:20px;
  color:#4cd96f;
}
  .CartControl{
    width:100px;
  }
  .count{
    width:30px;
    text-align: center;
  }
</style>
