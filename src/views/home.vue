<template>
  <div class="page">
    <div class="banner">
    </div>
    <div class="section">
      <h2>正在征集作品的活动</h2>
      <div class="item">
        <img class="img" src="../assets/img/1.jpg" alt="">
        <h3>最美夜晚</h3>
        <p>活动说明: 描绘美丽的夜色</p>
        <p>征集作品时间: 2018-5-10 -- 2018-5-31</p>
        <p>投票时间: 2018-6-10 -- 2018-6-31</p>
      </div>
      <div class="item">
        <img class="img" src="../assets/img/3.jpg" alt="">
        <h3>最美夜晚</h3>
        <p>活动说明: 描绘美丽的夜色</p>
        <p>征集作品时间: 2018-5-10 -- 2018-5-31</p>
        <p>投票时间: 2018-6-10 -- 2018-6-31</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // ..
  data () {
    return {
      showIndicators: false
    }
  }
}
</script>
<style lang="less" scoped>
.img {
    width: 100%;
  }
.page {
  .banner {
    width: 100%;
  }
  .section {
    // background: #fff;
    padding-top: 30px;
    .item {
      margin-bottom: 25px;
      // background: rgb(255, 255, 255);
      padding-bottom: 10px;
      box-shadow: 2px 0px 10px rgb(13, 14, 13);
    }
  }
}
</style>
