import Vue from 'vue'
// import Vuex from 'vuex'
import VueRouter from 'vue-router'

import Films from '@/views/Films'
import Nowplaying from '@/views/Films/Nowplaying'
import Detail from '@/views/Detail'
import Comingsoon from '@/views/Films/Comingsoon'
import Cinemas from '@/views/Cinemas.vue'
import City from '@/views/City'
import Search from '@/views/Search'
import Login from '@/views/Login'
// import Center from '@/views/Center'
// import Order from '@/views/Order'

Vue.use(VueRouter)

const routes = [
  {
    path: '*', // 通配符
    redirect: '/films/nowplaying' // 路由重定向
  },
  {
    path: '/films', // 通配符
    redirect: '/films/nowplaying' // 路由重定向
  },
  {
    path: '/films',
    component: Films,
    // alias: '*',  别名
    children: [
      {
        path: '/films/nowplaying',
        component: Nowplaying
      },
      {
        path: '/films/comingsoon',
        component: Comingsoon
      }
    ]
  },
  {
    name: 'dykDetail',
    path: '/film/detail/:myid', // 动态二级路由
    component: Detail
  },
  {
    path: '/cinemas',
    component: Cinemas
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/cinemas/search',
    component: Search
  },
  {
    path: '/center',
    component: () => import('@/views/Center'),
    meta: {
      isdykRequired: true
    }

    // 路由独享拦截
    // beforeEnter: (to, from, next) => {
    //   if (to.meta.isdykRequired) {
    //     // 判断 本地存储中是否token
    //     if (localStorage.getItem('token')) {
    //       next()
    //     } else {
    //       next({
    //         path: '/login',
    //         query: { redirect: to.fullPath }
    //       })
    //     }
    //   }
    // }
  },
  {
    path: '/order',
    component: () => import('@/views/Order'),
    meta: {
      isdykRequired: true
    }
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// 全局拦截(守卫)
// router.beforeEach((to, from, next) => {
//   console.log(to)

//   if (to.meta.isdykRequired) {
//     // 判断 本地存储中是否token
//     if (localStorage.getItem('token')) {
//       next()
//     } else {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     }
//   } else {
//     next()
//   }
// })

export default router
