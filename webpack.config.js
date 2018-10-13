var webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    //webpack config goes here
    // No need for this part since we are specifying in the scripts part directly.
    // entry: './src/index.js',

    // output: {
    //     filename: 'main.js',
    //     path: './dist'
    // },

    // module: {
    //     rules: [
    //       {
    //         test: /\.js$/,
    //         exclude: /node_modules/,
    //         use: {
    //           loader: "babel-loader"
    //         }
    //       },
    //       {
    //         test: /\.html$/,
    //         use: [
    //           {
    //             loader: "html-loader",
    //             options: { minimize: true }
    //           }
    //         ]
    //       }
    //     ]
    //   },
      plugins: [
        new HtmlWebPackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        })
      ]

};