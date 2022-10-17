import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // state公共状态
  state: {
    cityID: '310100',
    cityName: '上海'
  },
  mutations: {
    changeCityName(state, cityName) {
      state.cityName = cityName
      console.log(cityName)
    }
  }
})
