<template>
  <div class="app-container">
    <mheader></mheader>
    <transition>
      <router-view>
      </router-view>
    </transition>
 
    <mnav></mnav>
  </div>
</template>

<script>
import Vue from 'vue'
import mheader from './components/header/mheader'
import mnav from './components/tabbar/nav'
import { Indicator } from 'mint-ui'
Vue.prototype.$loading = Indicator;
export default {
  data () {
    return {

    }
  },
  components: {
    mheader,
    mnav
  }
}
</script>

<style lang="scss">
.app-container{
  padding-top: 40px;
  padding-bottom: 50px;
}
.v-enter{
  opacity: 0;
  transform: translateX(100%)
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active{
  transition : all .3s ease;
}
</style>
