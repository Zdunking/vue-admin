module.exports = {
  devServer: {
    host: 'localhost',
    port: '8083',
    proxy: {
      '/api': {
        target: 'http:127.0.0.1:9999',
        changeOrigin: true,
        pathRewrite: {  // 重写路径
          '^/api': ''  // 把/api变为空字符
        }
      }
    }
  }
}