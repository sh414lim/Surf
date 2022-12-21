const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const { createProxyMiddleware } = require('http-proxy-middleware');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const webpack = require('webpack');
const path = require('path');

const MAX_CYCLES = 10;
let numCyclesDetected = 0;
const isDevelopment = process.env.NODE_ENV !== 'production';
module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /\node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
            },
          },
        ],
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
    new ReactRefreshWebpackPlugin(),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('development'),
    }),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],

  resolve: {
    // 프로젝트의 루트디렉토리 설정, 상대경로 대신에 절대경로 가능하도록 함.(../components -> /components)
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
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
      '/api': 'http://localhost:8086',
    },
  },
};
