var path = require('path');

module.exports = {
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  resolveLoader: {
    root: path.resolve(__dirname, 'node_modules')
  },
  entry: {
    app: ["./src/root.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  }
};
