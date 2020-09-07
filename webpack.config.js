const path = require(`path`);

module.exports = {
  mode: `development`,
  entry: `./source/js/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `./build/js`)
  },
  devtool: `source-map`,
  devServer: {
    contentBase: path.join(__dirname, `build`),
    watchContentBase: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|ico|mp3|ogg|mp4|webm)$/,
        loader: 'file-loader',
        options: {name: 'media/[name].[ext]'}
      },

      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },

      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: true,
          attrs: 'img:src link:href source:src'
        }
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: `babel-loader`,
          options: {
            presets: [
              `@babel/preset-env`
            ]
          }
        }
      }
    ]
  }
};
