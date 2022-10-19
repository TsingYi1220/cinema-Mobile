<template>
  <div>
    <van-nav-bar title="影院" ref="navbar" @click-left="handleLeft" @click-right="handleRight">
      <template #left>
        {{cityName}}
        <van-icon name="arrow-down" size="12" color="black" />
      </template>
      <template #right>
        <van-icon name="search" size="24" color="black" />
      </template>
    </van-nav-bar>
    <div class="box" :style="{
      height:height
    }">
      <ul>
        <li v-for="data in cinemaList" :key="data.cinemaId">
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
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      height: '0px'
    }
  },
  computed: {
    ...mapState(['cinemaList', 'cityId', 'cityName'])
  },
  methods: {
    handleLeft() {
      // console.log('left')
      this.$router.push('/city')
    },
    handleRight() {
      this.$router.push('/cinemas/search')
    },

    ...mapActions(['getCinemaData'])
  },
  mounted() {
    this.$nextTick(() => {
      this.height =
        document.documentElement.clientHeight -
        this.$refs.navbar.$el.offsetHeight -
        document.querySelector('footer').offsetHeight +
        'px'
    })
    // console.log(
    //   document.documentElement.clientHeight,
    //   document.querySelector('footer').offsetHeight,
    //   this.$refs.navbar.$el.offsetHeight
    // )
    // 动态计算高度

    // 分发
    if (this.cinemaList.length === 0) {
      this.getCinemaData(this.cityId).then((res) => {
        this.$nextTick(() => {
          this.scroll = new BetterScroll('.box', {
            scrollbar: {
              fade: true
            }
          })
        })
      })
    } else {
      this.$nextTick(() => {
        this.$nextTick(() => {
          this.scroll = new BetterScroll('.box', {
            scrollbar: {
              fade: true
            }
          })
        })
      })
    }

    // http({
    //   url: `/gateway?cityId=${this.$store.state.cityId}`,
    //   headers: { 'X-Host': 'mall.film-ticket.cinema.list' }
    // }).then((res) => {
    //   // console.log(res.data.data.cinemas)
    //   this.cinemasList = res.data.data.cinemas

    //   // console.log(document.getElementsByTagName('li').length)
    //   this.$nextTick(() => {
    //     // console.log(document.getElementsByTagName('li').length)
    //     new BetterScroll('.box', {
    //       scrollbar: {
    //         fade: true
    //       }
    //     })
    //   })
    // })
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
</style>
