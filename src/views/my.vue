<template>
  <div class="my">
    <h2>my</h2>
  </div>
</template>
<script>
export default {
  methods: {
    httpTest () {
      // ...
      this.$fly.get('/api/login', {
        username: 'lytton',
        password: '123456'
      }).then(res => {
        console.log(res)
      })
    }
  },
  mounted () {
    this.httpTest()
  }
}
</script>
