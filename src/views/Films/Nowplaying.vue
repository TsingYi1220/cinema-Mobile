<template>
  <div>
    <van-list
      v-model="loading"
      loading-text="数据拉取中..."
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :immediate-check="false"
    >
      <van-cell v-for="data in datalist" :key="data.filmId">
        <div class="nowPlayingFilm">
          <div class="nowPlayingFilm-detail" @click="handleChangePage(data.filmId)">
            <div>
              <img :src="data.poster" />
            </div>
            <div class="nowPlayingFilm-info">
              <div class="nowPlayingFilm-name">
                <span class="name">{{data.name}}</span>
                <span class="item">{{data.item.name}}</span>
              </div>
              <div class="content">
                <span class="label">观众评分：</span>
                <span class="grade">{{data.grade}}</span>
              </div>
              <div class="actors">主演：{{data.actors|actorsFilter}}</div>
              <div>{{data.nation}}|{{data.runtime}}分钟</div>
            </div>
          </div>
          <div class="buy" @click="handleBuy(data.filmId)">购票</div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import http from '@/util/http'
import Vue from 'vue'

Vue.filter('actorsFilter', (data) => {
  return data.map((item) => item.name).join(' ')
})

export default {
  data() {
    return {
      datalist: [],
      current: 1,
      total: 0,
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad() {
      if (this.datalist.length === this.total && this.total !== 0) {
        this.finished = true
        return
      }
      this.current++
      http(
        `/gateway?cityId=${this.$store.state.cityId}&pageNum=${this.current}&pageSize=10&type=1&k=7644121`,
        {
          headers: {
            'X-Host': 'mall.film-ticket.film.list'
          }
        }
      ).then((res) => {
        // console.log(res.data.data.films)
        this.datalist = [...this.datalist, ...res.data.data.films]
        // loading设置为false
        this.loading = false
        this.total = res.data.data.total
      })
    },
    handleChangePage(id) {
      // console.log(id)
      // 编程式导航
      // location.href = '#/film/detail'

      // this.$router.push(`/film/detail/${id}`)
      // 通过路径跳转

      this.$router.push({
        name: 'dykDetail',
        params: {
          myid: id
        }
      })
    },
    handleBuy(id) {
      this.$router
        .push({
          path: '/order',
          query: {
            id: id
          }
        })
        .catch(() => {})
    }
  },
  mounted() {
    http(
      `/gateway?cityId=${this.$store.state.cityId}&pageNum=${this.current}&pageSize=10&type=1&k=7644121`,
      {
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      }
    ).then((res) => {
      // console.log(res.data.data.films)
      this.datalist = res.data.data.films
    })
  }
}
</script>

<style lang='scss' scoped>
.van-list {
  padding: 0 0 49px 0.15rem;
  .van-cell {
    width: 3.45 rem;
    overflow: hidden;
    padding: 0.15rem 0.15rem 0.15rem 0;
    .nowPlayingFilm {
      display: flex;
      width: 3.45rem;
      height: 0.94rem;
      .nowPlayingFilm-detail {
        width: 2.95rem;
        height: 0.94rem;
        img {
          float: left;
          width: 0.66rem;
        }
        .nowPlayingFilm-info {
          float: left;
          width: 2.09rem;
          height: 0.9rem;
          padding: 0 0.1rem;
          .nowPlayingFilm-name {
            float: left;
            width: 2.09rem;
            height: 0.22rem;
            span {
              display: inline-block;
              vertical-align: middle;
            }
            .name {
              max-width: calc(100% - 0.25rem);
              overflow: hidden;
              text-overflow: ellipsis;
              margin-right: 0.05rem;
              height: 0.18rem;
              line-height: 0.18rem;
              white-space: nowrap;
            }
            .item {
              font-size: 0.09rem;
              color: #fff;
              background-color: #d2d6dc;
              height: 0.14rem;
              line-height: 0.14rem;
              padding: 0 0.018rem;
              border-radius: 0.02rem;
            }
          }
          .grade {
            color: #ffb232;
            font-size: 14px;
          }
          .actors {
            max-width: calc(100% - 0.25rem);
            overflow: hidden;
            text-overflow: ellipsis;
            margin-right: 0.05rem;
            height: 0.22rem;
            white-space: nowrap;
          }
        }
      }

      .buy {
        position: relative;
        top: 50%;
        margin-top: -0.125rem;
        line-height: 0.25rem;
        height: 0.25rem;
        width: 0.5rem;
        color: #ff5f16;
        font-size: 0.13rem;
        text-align: center;
        border-radius: 0.02rem;
      }
      .buy::after {
        content: "";
        transform: scale(0.5);
        position: absolute;
        border: 1px solid #ff5f16;
        top: -50%;
        right: -50%;
        bottom: -50%;
        left: -50%;
        border-radius: 0.04rem;
      }
    }
  }
}
</style>
