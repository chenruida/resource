module.exports = {
  publicPath: "./", // 公共路径(必须有的)
  outputDir: "/var/www/resource", // 输出文件目录
  assetsDir: "static", //静态资源文件名称
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "东明博物馆";
      return args;
    });
  },
  lintOnSave: true,
  productionSourceMap: false, //去除打包后js的map文件
};
