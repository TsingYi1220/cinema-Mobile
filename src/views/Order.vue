<template>
  <div>order</div>
</template>

<script>
import axios from 'axios'
export default {
  mounted() {
    axios
      .get(
        '/api/mmdb/movie/v3/list/hot.json?ct=%E5%AE%89%E5%BA%86&ci=197&channelId=4'
      )
      .then((res) => {
        // console.log(res.data)
      })
  }
}
</script>

<style>
</style>
