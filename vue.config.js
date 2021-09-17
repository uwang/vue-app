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
};
