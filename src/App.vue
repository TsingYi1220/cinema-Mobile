<template>
  <div>
    <section>
      <router-view></router-view>
    </section>
    <tabbar v-show="this.$store.state.isTabbarShow"></tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
// 1. 引入你需要的组件
import Vant from 'vant'
// 2. 引入组件样式
import 'vant/lib/index.css'

import tabbar from './components/Tabbar.vue'
import SlideVerify from 'vue-monoplasty-slide-verify'

Vue.use(SlideVerify)
Vue.use(Vant)

export default {
  data() {
    return {
      screenWidth: window.innerWidth
    }
  },
  components: {
    tabbar
  },
  mounted() {
    window.addEventListener('resize', () => {
      if (this.screenWidth !== window.innerWidth) {
        this.Refresh()
      }
    })
  },
  methods: {
    Refresh() {
      this.$router.go(0)
    }
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
  font-size: 16px;
}
ul {
  list-style: none;
}
</style>
