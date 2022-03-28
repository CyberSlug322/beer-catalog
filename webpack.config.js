const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const zlib = require("zlib");

module.exports = {
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
    mode:"development",
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
          title: 'Caching',
          template:'./src/index.html'
        }),
        new CompressionPlugin({
          filename: "[path][base].br",
          algorithm: "brotliCompress",
          test: /\.(js|css|html|jpg)$/,
          compressionOptions: {
            params: {
              [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
            },
          },
          threshold: 0,
          minRatio: Infinity,
          deleteOriginalAssets: false,
        }),
       ],
    module: {   
        rules: [
          {
            test: /\.(jpe?g|png)$/i,
            type: "asset",
          },
            {
                test: /\.(css|scss)$/i,
                use: [MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                    ]
            },   
            {
              test: /\.jsx$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
              }
            },
            {
              test: /\.svg$/,
              use: ['@svgr/webpack'],
            }
        ]
    },
    entry: {
        main: ['@babel/polyfill','./src/index.jsx'], 
      },
    output: {
        filename: '[name].[contenthash].js',
        path: __dirname + '/dist',
        publicPath: '/'
    },
    optimization: {
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    devtool: "source-map",
};

