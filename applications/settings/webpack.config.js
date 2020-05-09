const path = require("path");
// const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

module.exports = {
  entry: {
    singleSpaEntry: "src/singleSpaEntry.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    library: "@kombucha/settings",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "html-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js"],
    modules: [__dirname, "node_modules"],
  },
  devtool: "none",
  externals: [],
  plugins: [],

  optimization: {
    minimize: false,
  },
};
