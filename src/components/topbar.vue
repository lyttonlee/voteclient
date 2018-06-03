<template>
  <div class="topbar">
    <mu-appbar class="bar">
      <mu-button @click="goBack" icon slot="left">
        <mu-icon size="25" value=":iconfont icon-fanhui"></mu-icon>
      </mu-button>
      {{$route.name}}
      <mu-button @click="share" icon slot="right">
        <mu-icon size="25" value=":iconfont icon-fenxiang"></mu-icon>
      </mu-button>
    </mu-appbar>
    <mu-bottom-sheet class="sheet" :open.sync="open">
      <mu-sub-header>分享到哪？</mu-sub-header>
      <mu-list @item-click="itemClick">
        <mu-list-item button>
          <mu-list-item-action>
            <mu-icon value=":iconfont icon-fenxiang"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Title</mu-list-item-title>
          <mu-list-item-sub-title>sub title</mu-list-item-sub-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-action>
            <mu-icon value=":iconfont icon-fenxiang"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Title</mu-list-item-title>
          <mu-list-item-sub-title>sub title</mu-list-item-sub-title>
        </mu-list-item>
      </mu-list>
    </mu-bottom-sheet>
  </div>
</template>
<script>
export default {
  data () {
    return {
      open: false
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    share () {
      this.open = true
    },
    itemClick () {
      this.open = false
    }
  }
}
</script>
<style lang="less" scoped>
@import '../common/less/index.less';
.topbar {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  .bar {
    background-color: @footColor;
    color: @activeColor;
  }
  // 无效！
  // .sheet {
  //   background-color: @footColor !important;
  //   color: @activeColor;
  // }
}
</style>
