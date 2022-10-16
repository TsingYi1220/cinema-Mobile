<template>
  <div>
    <van-index-bar :index-list="indexList" @select="handleChange">
      <div v-for="data in cityList" :key="data.type">
        <van-index-anchor :index="data.type" />
        <van-cell v-for="item in data.list" :key="item.cityId" :title="item.name" />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import http from '@/util/http'
import { Toast } from 'vant'

export default {
  data() {
    return {
      cityList: []
    }
  },
  computed: {
    indexList() {
      // console.log(
      //   this.cityList.map((item) => {
      //     return item.type
      //   })
      // )
      return this.cityList.map((item) => item.type)
    }
  },
  methods: {
    handleChange(data) {
      // console.log('change', data)
      Toast(data)
      setTimeout(() => {
        Toast.clear()
      }, 1000)
    },
    renderCity(list) {
      // console.log(list)

      const cityList = []
      const letterList = []
      for (let i = 65; i < 91; i++) {
        // console.log(String.fromCharCode(i))
        letterList.push(String.fromCharCode(i))
      }
      // console.log(letterList)
      letterList.forEach((letter) => {
        const newList = list.filter(
          (item) => item.pinyin.substring(0, 1).toUpperCase() === letter
        )
        // console.log(newList)
        newList.length > 0 &&
          cityList.push({
            type: letter,
            list: newList
          })
      })
      return cityList
    }
  },
  mounted() {
    http({
      url: 'https://m.maizuo.com/gateway?k=464058',
      headers: {
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then((res) => {
      // console.log(res.data.data.cities)
      this.cityList = this.renderCity(res.data.data.cities)
      // 1. 327条数据 ==> A,B分组   利用转换后的数组，结合组件库进行渲染页面
      console.log(this.cityList)
    })
  }
}
</script>

<style lang="scss">
.van-toast--html,
.van-toast--text {
  min-width: 30px;
}
</style>
