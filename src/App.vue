<template>
  <div id="app">

    <router-view/>

    <FooterBar />
    <div class="footer"></div>
  </div>
</template>

<script>
  import FooterBar from  './components/FooterBar/FooterBar.vue'
export default {
  name: 'App',
  components:{
    FooterBar
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
