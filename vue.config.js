module.exports = {
  // 公共路径(必须有的)
  publicPath: "./", 
  // 输出文件目录
  outputDir: "/var/www/resource", 
   //静态资源文件名称
  assetsDir: "static",
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "东明博物馆";
      return args;
    });
  },
  lintOnSave: true,
  //去除打包后js的map文件
  productionSourceMap: false, 
  //sass
  css: {
    loaderOptions: {
       sass: {
           additionalData:`@import "./src/assets/scss/style.scss";` 
           }
       }
   }
};
