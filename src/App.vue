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

Vue.use(Vant)

export default {
  components: {
    tabbar
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
