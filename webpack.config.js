module.exports = {
  entry: './src/index',
  output: {
    filename: 'js/browser-bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  },
  resolve: {
    extensions: ['', '.jsx', '.js']
  }
};
