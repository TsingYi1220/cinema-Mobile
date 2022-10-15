// import axios from 'axios'

// // 对于数据请求的封装
// function httpForList() {
//   return axios.get('https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=7644121', {
//     headers: {
//       'X-Host': 'mall.film-ticket.film.list'
//     }
//   })
// }

// function httpForDetail(params) {
//   return axios({
//     url: `https://m.maizuo.com/gateway?filmId=${params}&k=5335171`,
//     headers: {
//       'X-Host': 'mall.film-ticket.film.info'
//     }
//   })
// }

// export default {
//   httpForList,
//   httpForDetail
// }

import axios from 'axios'
import { Toast } from 'vant'

const http = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 10000,
  headers: {}
})

// 在发请求之前拦截--showloading
// 添加请求拦截器
http.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // console.log(config)
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      duration: 0
    })
    return {
      ...config
    }
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 在成功之后拦截 --hideLoading
// 添加响应拦截器
http.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么

    // 隐藏loading
    Toast.clear()
    return response
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    Toast.clear()
    return Promise.reject(error)
  }
)

export default http
