module.exports = {
  devServer: {
    overlay: {
      warnings: false, // 关闭警告蒙层
      errors: false, // 关闭错误蒙层
    },
    proxy: {
      "/api": {
        target: "http://v.juhe.cn/",
        changeOrigin: true,
        ws: true,
        secure: false, // 关闭
        pathRewrite: {
          "^/api": ""
        }
      }
    },
  },
  lintOnSave: false
}
