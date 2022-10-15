<template>
  <div v-if="filmInfo">
    <detail-header v-scroll="20">{{filmInfo.name}}</detail-header>
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
        <div
          class="detail-text"
          style="line-height:15px;"
          :class="isHidden?'hidden':''"
        >{{filmInfo.synopsis}}</div>

        <div style="text-align:center">
          <i
            class="iconfont"
            :class="isHidden?'icon-moreunfold':'icon-less'"
            @click="isHidden=!isHidden"
          ></i>
        </div>
      </div>
    </div>

    <!-- 演员表 -->
    <div>
      <div>演职人员</div>
      <detail-swiper :perview="3.5" name="actors">
        <detail-swiper-item v-for="data,index in filmInfo.actors" :key="index">
          <div
            class="avatar"
            :style="{
        backgroundImage:'url('+data.avatarAddress+')'
      }"
          ></div>
          <div style="text-align:center;font-size:12px">{{data.name}}</div>
          <div style="text-align:center;font-size:13px">{{data.role}}</div>
        </detail-swiper-item>
      </detail-swiper>
    </div>

    <!-- 剧照 -->
    <div>
      <div>剧照</div>
      <detail-swiper class="avatarswiper" :perview="1.5" name="photos">
        <detail-swiper-item v-for="data,index in filmInfo.photos" :key="index">
          <div
            class="avatar"
            :style="{
        backgroundImage:'url('+data+')'
      }"
            @click="handlePreview(index)"
          ></div>
        </detail-swiper-item>
      </detail-swiper>
    </div>
  </div>
</template>

<script>
import http from '@/util/http'
import Vue from 'vue'
import moment from 'moment'
import detailSwiper from '@/components/detail/DetailSwiper.vue'
import detailSwiperItem from '@/components/detail/DetailSwiperItem.vue'
import detailHeader from '@/components/detail/DetailHeader.vue'
import { ImagePreview } from 'vant'

Vue.filter('dateFilter', (date) => {
  return moment(date * 1000).format('YYYY-MM-DD')
})

Vue.directive('scroll', {
  inserted(el, binding) {
    // console.log(el)
    el.style.display = 'none'
    window.onscroll = () => {
      // console.log('scroll')
      if (
        (document.documentElement.scrollTop || document.body.scrollTop) >
        binding.value
      ) {
        // console.log('显示')
        el.style.display = 'block'
      } else {
        // console.log('yc')
        el.style.display = 'none'
      }
    }
  },
  // 销毁执行的
  unbind() {
    window.onscroll = null
  }
})

export default {
  data() {
    return {
      filmInfo: null,
      isHidden: true
    }
  },
  components: {
    detailSwiper,
    detailSwiperItem,
    detailHeader
  },
  methods: {
    handlePreview(index) {
      ImagePreview({
        images: this.filmInfo.photos,
        startPosition: index
      })
    }
  },
  created() {
    // console.log(this.$route.params.myid)
    // axios利用id法请求到详情接口，获取详细数据，布局页面
    http(
      `https://m.maizuo.com/gateway?filmId=${this.$route.params.myid}&k=5335171`,
      {
        headers: { 'X-Host': 'mall.film-ticket.film.info' }
      }
    ).then((res) => {
      // console.log(res.data.data.film)
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
.hidden {
  overflow: hidden;
  height: 30px;
}
.avatar {
  width: 100%;
  height: 1.13rem;
  background-position: center;
  background-size: cover;
}
.avatarswiper {
  overflow: hidden;
}
</style>
