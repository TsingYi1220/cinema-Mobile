import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router: router,
  store,
  render: (h) => h(App)
}).$mount('#app')

// const a = '2'
// const b = '321'
// function test() {
//   console.log(a, b)
// }
// test()
