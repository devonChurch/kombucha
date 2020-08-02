const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "kombucha",
    projectName: "create",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    output: {
      filename: "app.js",
    },
  });
};
