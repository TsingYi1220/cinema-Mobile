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

const http = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 10000,
  headers: {}
})

// 在发请求之前拦截--showloading
// 在成功之后拦截 --hideLoading
export default http
