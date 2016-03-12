var path = require('path');
var webpack = require('webpack');
var use = require('postcss-use');

module.exports = {
  devtool: 'eval-source-map',
  postcss: [
    require('postcss-center'),
    require('postcss-cssnext')(),
    use({modules: ['lost']})
  ],
  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/main.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public'),
    publicPath: '/public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: 'react-hot!babel'
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        loaders:[
          'style-loader',
          'css-loader',
          'postcss',
          'sass-loader'
        ]
      }
    ]
  }
};
