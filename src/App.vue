<template>
  <div id="app">
    <top-bar/>
    <footBar></footBar>
    <transition
      :duration="{ enter: 1500, leave: 0 }"
      leave-active-class="animated fadeOutUp"
      enter-active-class="animated fadeInUp">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import footBar from '@conp/footBar'
import topBar from '@conp/topbar'
export default {
  name: 'App',
  components: {
    footBar,
    topBar
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
  margin: 80px auto;
}
</style>
