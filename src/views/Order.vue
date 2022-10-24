<template>
  <div class="order">
    <span>order</span>
    <el-button class="button" size="small" icon="el-icon-back" round @click="handleBack">返回</el-button>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  methods: {
    handleBack() {
      this.$router.back()
    }
  },
  beforeRouteEnter(to, from, next) {
    if (to.meta.isdykRequired) {
      if (localStorage.getItem('username')) {
        next()
      } else {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      }
    }
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
.order {
  position: relative;
  .button {
    position: absolute;
    right: 0;
  }
}
</style>
