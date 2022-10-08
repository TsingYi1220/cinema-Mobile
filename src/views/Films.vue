<template>
  <div>
    <film-swiper :key="datalist.length">
      <film-swiper-item v-for="data in datalist" :key="data.id" class="filmswiperitem">
        <img :src="data.imgUrl" />
        {{data.title}}
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
import axios from 'axios'

export default {
  data() {
    return {
      datalist: []
    }
  },
  mounted() {
    setTimeout(() => {
      // this.datalist = ['aaa', 'bbb', 'ccc']
      axios.get('/banner.json').then((res) => {
        // console.log(res.data.banner)
        this.datalist = res.data.banner
      })
    }, 100)
  },
  components: {
    filmSwiper,
    filmSwiperItem,
    filmHeader
  }
}
</script>

<style lang='scss' scoped>
.dykactive {
  color: cyan;
}
.filmswiperitem {
  img {
    width: 100%;
  }
}
.sticky {
  position: sticky;
  top: 0;
  background: white;
}
</style>
