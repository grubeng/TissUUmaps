module.exports = {
  entry: {
    index: "./js/index.js",
  },
  output: { filename: "main.js" },
  module: {
    rules: [
      {
        test: /\.exec\.js$/,
        use: ["script-loader"],
      },
    ],
  },
};
