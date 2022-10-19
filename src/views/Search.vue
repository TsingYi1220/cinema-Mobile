<template>
  <div>
    <form action="/" ref="search">
      <van-search
        v-model="value"
        show-action
        placeholder="输入影院名称"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <div v-if="value" class="box" :style="{
      height:height
    }">
      <ul>
        <li v-for="data in search" :key="data.cinemaId">
          <div class="left">
            <div class="cinema_name">{{data.name}}</div>
            <div class="cinema_text">{{data.address}}</div>
          </div>

          <div class="right">
            <div style="color:#ff5f16">￥{{data.lowPrice/100}}起</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'

export default {
  data() {
    return {
      height: '0px',
      value: ''
    }
  },
  methods: {
    onSearch() {},
    onCancel() {
      this.$router.back()
    }
  },
  computed: {
    search() {
      return this.$store.state.cinemaList.filter(
        (item) =>
          item.name.toUpperCase().includes(this.value.toUpperCase()) ||
          item.address.toUpperCase().includes(this.value.toUpperCase())
      )
    }
  },
  mounted() {
    this.height =
      document.documentElement.clientHeight -
      this.$refs.search.offsetHeight -
      document.querySelector('footer').offsetHeight +
      'px'

    if (this.$store.state.cinemaList.length === 0) {
      this.$store.dispatch('getCinemaData', this.$store.state.cityId)
    }
  },
  updated() {
    if (this.value) {
      this.$nextTick(() => {
        this.scroll = new BetterScroll('.box', {
          scrollbar: {
            fade: true
          }
        })
      })
    }
  }
}
</script>

<style lang='scss' scoped>
li {
  padding: 0.15rem;
  border-bottom: 1px solid #ededed;
  display: flex;
  justify-content: space-between;
  .left {
    width: 2.12rem;
  }
  .cinema_name {
    font-size: 15px;
  }
  .cinema_text {
    color: #797d82;
    font-size: 12px;
    margin-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.box {
  // height: 6rem;

  overflow: hidden;
  position: relative; //修正滚动条位置
}
// footer {
//   display: none;
// }
</style>
