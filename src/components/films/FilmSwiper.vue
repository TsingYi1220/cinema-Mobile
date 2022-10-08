<template>
  <div class="swiper-container mySwiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'

export default {
  props: {
    loop: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    new Swiper('.mySwiper', {
      // direction: 'vertical', //垂直

      centeredSlides: true,
      loop: this.loop,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  }
}
</script>

<style>
</style>
