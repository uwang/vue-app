// https://cli.vuejs.org/zh/config/#%E9%85%8D%E7%BD%AE%E5%8F%82%E8%80%83

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true, //允许链式调用的换行
      },
    },
  },
  devServer: {
    // 开发环境中，将以 /api 开头的请求，重定向到局域网或者测试服务器上的数据服务
    proxy: {
      "/api/news": {
        target: "http://127.0.0.01:3009",
        changeOrigin: true,
      },
      "/api": {
        target: "http://127.0.0.01:3009",
        changeOrigin: true,
      },
    },
  },
};
