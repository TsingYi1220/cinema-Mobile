<template>
  <div>
    <router-link to="/cinemas/search" custom v-slot="{ navigate }">
      <a @click="navigate">搜索</a>
    </router-link>
    <ul>
      <li v-for="data in cinemasList" :key="data.cinemaId">
        <div class="left">
          <div class="cinema_name">{{data.name}}</div>
          <div class="cinema_text">{{data.address}}</div>
        </div>

        <div class="right">
          <div style="color:#ff5f16">￥{{data.lowPrice/100}}起</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import http from '@/util/http'

export default {
  data() {
    return {
      cinemasList: []
    }
  },
  mounted() {
    http({
      url: 'https://m.maizuo.com/gateway?cityId=310100&ticketFlag=1&k=5025061',
      headers: { 'X-Host': 'mall.film-ticket.cinema.list' }
    }).then((res) => {
      console.log(res.data.data.cinemas)
      this.cinemasList = res.data.data.cinemas
    })
  }
}
</script>

<style lang='scss' scoped>
li {
  padding: 0.15rem;

  display: flex;
  justify-content: space-between;
  .left {
    width: 2.12rem;
  }
  .cinema_name {
    font-size: 15px;
  }
  .cinema_text {
    color: #797d82;
    font-size: 12px;
    margin-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
