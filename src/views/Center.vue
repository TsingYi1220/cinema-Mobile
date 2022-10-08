<template>
  <div>
    center--aaa
    <button @click="handleOrder">订单</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleOrder() {
      this.$router.push('/order')
    }
  },
  // 路由生命周期
  beforeRouteEnter(to, from, next) {
    if (to.meta.isdykRequired) {
      if (localStorage.getItem('token')) {
        next()
      } else {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      }
    }
  }
}
</script>

<style>
</style>
