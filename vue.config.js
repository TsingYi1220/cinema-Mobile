const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/',
  productionSourceMap: false,
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = '热映电影'
      return args
    })
  },
  devServer: {
    historyApiFallback: {
      index: '/index.html' // 与output的publicPath
    },

    // 配置反向代理
    proxy: {
      '/api': {
        target: 'https://i.maoyan.com',
        changeOrigin: true
      },

      '/dyk': {
        target: 'https://m.maizuo.com',
        changeOrigin: true,
        pathRewrite: {
          '^/dyk': ''
        } // 设置完重启服务
      }
    }
  }
})

// https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json
// https://i.maoyan.com/dyk/api/mmdb/movie/v3/list/hot.json
