import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = {
  entry: './src/index.js',
  devtool: 'cheap-source-map',
  output: {
    filename: 'dist/bundle.js',
    publicPath: ''
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'eslint-loader',
      },
      {
        use: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/,
      },
    ],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=react&presets[]=env' }
    ]
  },
  devServer: {
    historyApiFallback: true,
    host: 'dev.gameofdrones.com',
    port: '3030',
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Game of drones', template: './public/index.html' })
  ],
}
