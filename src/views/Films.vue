<template>
  <div>
    <film-swiper :key="datalist.length" :loop="datalist.length>1?true:false">
      <film-swiper-item v-for="data in datalist" :key="data.id" class="filmswiperitem">
        <img :src="data.poster" />
      </film-swiper-item>
    </film-swiper>
    <!-- <div>二级的申明式导航</div> -->

    <film-header class="sticky"></film-header>
    <router-view></router-view>
  </div>
</template>

<script>
import filmSwiper from '@/components/films/FilmSwiper'
import filmSwiperItem from '@/components/films/FilmSwiperItem'
import filmHeader from '@/components/films/Filmheader.vue'
import http from '@/util/http'

export default {
  data() {
    return {
      datalist: []
    }
  },
  mounted() {
    // this.datalist = ['aaa', 'bbb', 'ccc']
    http(
      `/gateway?cityId=${this.$store.state.cityId}&pageNum=1&pageSize=10&type=1&k=7644121`,
      {
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      }
    ).then((res) => {
      // console.log(res.data.data.films)
      this.datalist = res.data.data.films
    })
  },
  components: {
    filmSwiper,
    filmSwiperItem,
    filmHeader
  }
}
</script>

<style lang='scss' scoped>
.mySwiper {
  height: 2.1rem;
}
.filmswiperitem {
  display: flex;
  align-items: center;
  img {
    width: 100%;
  }
}
.sticky {
  position: sticky;
  top: 0;
  background: white;
  z-index: 99;
}
</style>
