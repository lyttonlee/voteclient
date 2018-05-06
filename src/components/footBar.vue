<template>
  <div class="nav">
    <div class="foot">
      <template v-for="item in routes">
        <router-link class="item" :key="item.name" :to="item.path" exact>
          <i :class="'icon iconfont ' + item.iconClass"></i>
        </router-link>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  // ..
  data () {
    return {
      routes: []
    }
  },
  mounted () {
    this.routes = this.$router.options.routes
    // console.log(this.routes)
  }
}
</script>
<style lang="less" scoped>
@import '../common/less/index.less';
.nav {
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  z-index: 10;
  background: @footColor;
  .foot {
    height: 60px;
    display: flex;
    // flex-direction: row;
    // flex-wrap: nowrap;
    // align-items: stretch;
    .item {
      // background: #666;
      flex: 1;
      cursor: pointer;
      text-decoration: none;
      color: @iconColor;
      .icon {
        font-size: 30px;
        line-height: 60px;
      }
    }
    .router-link-active {
      color: @activeColor;
      // font-weight: bold;
    }
  }
}
</style>
