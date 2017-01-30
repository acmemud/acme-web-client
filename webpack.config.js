var path = require('path');

module.exports = {
  module: {
    loaders: [
      { test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
      },
      { test: /\.scss$/, 
        loaders: ["style-loader", 
                  "css-loader", 
                  "sass-loader?"
                   + "includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib")
                   + "&includePaths[]=" + path.resolve(__dirname, "./node_modules/bootstrap-sass/assets/stylesheets")
                 ]
      },
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "url-loader?limit=10000&minetype=application/font-woff" 
      },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "file-loader" 
      }
    ]
  },
  resolveLoader: {
    root: path.resolve(__dirname, 'node_modules')
  },
  entry: {
    app: ["./src/js/MudBootstrap.js"]
  },
  output: {
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  watchOptions: {
    poll: true
  }
};
