<template>
  <div class="page">
    <h1>vote</h1>
    <p>vote</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [1, 2, 3],
      topStatus: '',
      loading: false
    }
  },
  methods: {
    loadTop () {
      console.log('top reload')
      console.log(this)
      setTimeout(() => {
        let last = this.list.length + 1
        console.log(last)
        for (let i = 1; i <= 10; i++) {
          this.list.unshift(last + i)
        }
        this.$refs.loadmore.onTopLoaded()
      }, 2000)
    },
    handleTopStatusChange (status) {
      console.log(status)
      // 只有当status = loading 的时候才会执行loadTop方法
      this.topStatus = status
    },
    loadMore () {
      console.log('loadmore start!')
      this.loading = true
      setTimeout(() => {
        let last = this.list.length + 1
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i)
        }
      }, 2000)
      this.loading = false
    },
    scrollAction (ev) {
      console.log(ev)
    }
  }
}
</script>
<style lang="less" scoped>
li {
  height: 30px;
}
</style>
