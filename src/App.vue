<template>
  <div>
    <tabbar></tabbar>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import tabbar from './components/Tabbar.vue'

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
section {
  padding-bottom: 0.49rem;
}
</style>
