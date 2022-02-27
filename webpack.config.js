const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
    mode:"development",
    plugins: [
        // new HtmlWebpackPlugin({
        //   title: 'Caching',
        // }),
        new MiniCssExtractPlugin(),
       ],
    module: {   
        rules: [
          {
            test: /\.(jpe?g|png)$/i,
            type: "asset",
          },
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                    ]
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
              }
            },
        ]
    },
    entry: {
        main: './src/index.js', 
      },
    output: {
        filename: '[name].[contenthash].js',
        path: __dirname + '/dist',
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

