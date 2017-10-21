import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = {
  entry: './src/index.js',
  devtool: 'cheap-source-map',
  output: {
    filename: 'dist/bundle.js',
    publicPath: ''
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=react' }
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
