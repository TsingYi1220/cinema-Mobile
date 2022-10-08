<template>
  <div>
    cinemas
    <router-link to="/cinemas/search" custom v-slot="{ navigate }">
      <a @click="navigate">搜索</a>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
