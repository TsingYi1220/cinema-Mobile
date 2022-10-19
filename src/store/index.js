import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/util/http'

Vue.use(Vuex)

export default new Vuex.Store({
  // state公共状态
  state: {
    cityId: '310100',
    cityName: '上海',
    cinemaList: []
  },
  // 统一管理，被devtools记录状态的修改
  // 只能支持同步
  mutations: {
    changeCityName(state, cityName) {
      state.cityName = cityName
      // console.log(cityName)
    },
    changeCityId(state, cityId) {
      state.cityId = cityId
    },
    changeCinemaData(state, data) {
      // console.log(data)
      state.cinemaList = data
    }
  },
  // 支持异步和同步
  actions: {
    getCinemaData(store, cityId) {
      // console.log('getCinemaData-action', store)
      return http({
        url: `/gateway?cityId=${cityId}&ticketFlag=1&k=8521379`,
        headers: { 'X-Host': 'mall.film-ticket.cinema.list' }
      }).then((res) => {
        // console.log(res.data.data.cinemas)
        store.commit('changeCinemaData', res.data.data.cinemas)
      })
    }
  },
  modules: {}
})

// vuex 管理保存公共状态， (分散在各个组件内部的状态，统一管理)
// vue 默认管理在内存， 一刷新页面 公共状态就丢失
// vuex 持久化

// vuex 应用
// 1.非父子的通信
// 2.后端数据的缓存快照，减少重复数据请求，减轻服务器压力，投稿用户体验
