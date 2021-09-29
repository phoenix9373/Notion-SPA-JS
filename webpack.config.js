const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    publicPath: "/",
    // host: ''
    overlay: true,
    // port: 8081
    stats: "errors-only",
    historyApiFallback: true,
  },
};
