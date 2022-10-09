const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { webpack } = require("webpack");

module.exports = {
    mode: 'development', // 1
    entry: './src/index.js', // 2
    output: { // 3

      path: path.resolve(__dirname , 'dist'),
      filename : 'bundle.js',
      publicPath:'/dist/'
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

  plugins:[

    new CleanWebpackPlugin(),

    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('development'),
    }),
  ],

  resolve:{
      //프로젝트의 루트 디렉로리 설정  상대경로 대신에 절대경로 가능하도록 @
      extensions:['*','.js','.jsx'],
      module : [path.resolve(__dirname, 'src'), 'node_modules'],
      alias:{
        '@':path.resolve(__dirname,'src'),
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