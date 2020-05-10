module.exports = {
  chainWebpack: (config) => {
    config.externals(["vue", "vue-router"]);
    config.output.filename("[name].js");
    config.output.chunkFilename("[name].js");
  },
};
