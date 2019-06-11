<template>
  <div id="app">
    <router-view/>
    <FooterBar v-show="$route.meta.footerBarShow" />
    <div class="footer"></div>
  </div>
</template>

<script>
import FooterBar from  './components/FooterBar/FooterBar.vue'

import  {mapActions} from 'vuex'
export default {
  name: 'App',
  components:{
    FooterBar
  },
  mounted (){
    //this.ressetUser();
    this.$store.dispatch('ressetUser')
  },
  methods:{
   // ...mapActions(['ressetUser'])
  },
  computed:{

  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
