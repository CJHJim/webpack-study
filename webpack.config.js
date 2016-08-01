var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var TEM_PATH = path.resolve(ROOT_PATH, 'templates');

module.exports = {
  //项目文件夹，可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件的名字
  entry: {
    //接下来的配置是要将第三方苦和程序本身的代码分离出来
    app: path.resolve(APP_PATH, 'index.js'),
    mobile: path.resolve(APP_PATH, 'mobile.js'),
    //添加要打包在vendors中的库
    vendors: ['jquery', 'moment']
  },
  //输出文件名 合并以后的ja会命名为bundle.js
  //产生Hash名称的script来防止缓存
  output: {
    path: BUILD_PATH,
    //[name]会将编译好的文件名改为入口文件名
    filename: '[name].[hash].js'
  },
  //添加编译插件
  plugins: [
    //使用uglyfyjs压缩js代码
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    }),
    //然后把入口文件里面的数组打包成verdors.js
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    //分别配置两个页面的HtmlWebpackPlugin实例
    new HtmlWebpackPlugin({
      title: 'Hello world app',
      template: path.resolve(TEM_PATH, 'index.html'),
      filename: 'index.html',
      //chunks 这个参数告诉插件要引用的entry里面的哪几个入口
      chunks: ['app', 'vendors'],
      //要将script插入到标签里
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      title: 'Hello Mobile app',
      template: path.resolve(TEM_PATH, 'mobile.html'),
      filename: 'mobile.html',
      //chunks 这个参数告诉插件要引用的entry里面的哪几个入口
      chunks: ['mobile', 'vendors'],
      //要将script插入到标签里
      inject: 'body'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
    // //webpack提供一个插件 能把一个全局变量插入到所有的代码中
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery'
    // }),

  ],
  resolve: {
      root: [path.join(__dirname, 'node_modules'),APP_PATH],
      alias: {
          'jquery': 'jquery/dist/jquery.min.js',
          'Vue': 'vue/dist/vue.js',
          'app': path.resolve(__dirname, './app'),
          'assets': path.resolve(__dirname, './app/assets'),
          'components': path.resolve(__dirname, './app/components')
      },
      fallback: [path.join(__dirname, './node_modules')],
      extensions: ['', '.js', '.vue', '.scss', '.css'] //设置require或import的时候可以不需要带后缀
  },
  resolveLoader: {
      root: path.join(ROOT_PATH, 'node_modules'),
      fallback: [path.join(__dirname, './node_modules')],
  },
  //添加组件
  module: {
    //预处理loaders
    proLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: ROOT_PATH,
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        include: ROOT_PATH,
        exclude: /node_modules/
      }
    ],
    loaders: [
      //处理vue
      {
          test: /\.vue$/,
          loader: 'vue'
      },
      {
        test: /\.scss$/,//使用正则匹配css文件
        // loader: ExtractTextPlugin.extract("style-loader", "css!sass")
        loader: 'style!css!sass',//对css文件使用两个loader进行处理
        //分别是css-loader和style-loader，loader的处理顺序是从右到左的，也就是先运行css-loader 然后运行style-loader
        include: APP_PATH
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
        }
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: APP_PATH,
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
    ]
  },
  //配置jshont选项，支持es6校验
  // jshint: {
  //   'esnext': true
  // },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  //vue配置
  vue: { //vue的配置,需要单独出来配置
      loaders: {
          js: 'babel'
      }
  },
  //采用source-map的形式显示出错代码位置
  devtool: 'eval-source-map',
  //添加服务器配置
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    //配置代理url
    proxy: {
      '/api/*': {
        target: 'http://localhost:5000',
        secure: false
      }
    }
  }
};
