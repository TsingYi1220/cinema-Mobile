<template>
  <div class="header">
    <i class="iconfont icon-back" @click="handleBack"></i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  methods: {
    handleBack() {
      this.$router.back()
    }
  }
}
</script>

<style lang='scss' scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  height: 0.44rem;
  width: 100%;
  line-height: 0.44rem;
  background-color: white;
  text-align: center;
  i {
    font-size: 30px;
    position: fixed;
    left: 0.1rem;
    top: 0;
  }
}
</style>
