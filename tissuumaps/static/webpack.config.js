const path = require("path");

module.exports = {
  entry: {
    index: "./js/index.ts",
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: { loader: "ts-loader", options: { transpileOnly: true } },
        exclude: /node_modules/,
      },
    ],
  },
};
