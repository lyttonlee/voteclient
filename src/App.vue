<template>
  <div id="app">
    <footBar></footBar>
    <transition
      :duration="{ enter: 1500, leave: 0 }"
      leave-active-class="animated fadeOutUp"
      enter-active-class="animated fadeInUp">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import footBar from '@conp/footBar'
export default {
  name: 'App',
  components: {
    footBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 12px;
}
.page {
  margin-bottom: 80px;
}
</style>
