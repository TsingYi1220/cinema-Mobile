<template>
  <div v-if="filmInfo">
    <!-- <img :src="filmInfo.poster" /> -->
    <div :style="{
        backgroundImage:'url('+filmInfo.poster+')'
      }" class="poster"></div>
    <div class="content">
      <div>{{filmInfo.name}}</div>
      <div>
        <div class="detail-text">{{filmInfo.category}}</div>
        <div class="detail-text">{{filmInfo.premiereAt | dateFilter}}上映</div>
        <div class="detail-text">{{filmInfo.nation}} | {{filmInfo.runtime}}分钟</div>
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/util/http'
import Vue from 'vue'
import moment from 'moment'

Vue.filter('dateFilter', (date) => {
  return moment(date * 1000).format('YYYY-MM-DD')
})

export default {
  data() {
    return {
      filmInfo: null
    }
  },
  created() {
    console.log(this.$route.params.myid)
    // axios利用id法请求到详情接口，获取详细数据，布局页面
    http(
      `https://m.maizuo.com/gateway?filmId=${this.$route.params.myid}&k=5335171`,
      {
        headers: { 'X-Host': 'mall.film-ticket.film.info' }
      }
    ).then((res) => {
      console.log(res.data.data.film)
      this.filmInfo = res.data.data.film
    })
  }
}
</script>

<style lang="scss" scoped>
.poster {
  width: 100%;
  height: 2.1rem;
  background-position: center;
  background-size: cover;
}
.content {
  padding: 0.15rem;
  .detail-text {
    color: #797d82;
    font-size: 13px;
    margin-top: 4px;
  }
}
</style>
