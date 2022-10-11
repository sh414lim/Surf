const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const { createProxyMiddleware } = require('http-proxy-middleware');
const webpack = require('webpack');
const path = require('path');

const MAX_CYCLES = 10;
let numCyclesDetected = 0;

module.exports = {
  mode: 'development',

  //진입전 스크립트 파일
  entry: path.resolve(__dirname, 'src/index.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },

  module: {
    rules: [
      {
        // 1
        test: /\.(js|jsx)$/,
        exclude: /\node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'file-loader',
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),

    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('development'),
    }),
  ],

  resolve: {
    // 프로젝트의 루트디렉토리 설정, 상대경로 대신에 절대경로 가능하도록 함.(../components -> /components)
    extensions: ['*', '.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  devServer: {
    publicPath: 'http://localhost:3000/dist',
    contentBase: path.join(__dirname, 'public'), //절대 경로 설정
    port: 3000,
    hot: true, // HRM(새로 고침 안해도 변경된 모듈 자동으로 적용)
    historyApiFallback: true,
    //   open: true,
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
};
