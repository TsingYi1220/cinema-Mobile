<template>
  <div>
    <ul>
      <li v-for="item,index in itemRouter" :key="index">
        <router-link :to="item" custom v-slot="{navigate,isActive}">
          <span @click="navigate" :class="isActive?'dykactive':'' ">{{index}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemRouter: {
        正在热映: '/films/nowplaying',
        即将上映: '/films/comingsoon'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  height: 0.49rem;
  line-height: 0.49rem;
  li {
    flex: 1;
    text-align: center;
  }
}

.dykactive {
  color: #ff5f16;
  border-bottom: 2px solid red;
}
</style>
