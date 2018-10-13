var webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    //webpack config goes here
    // No need for this part since we are specifying in the scripts part directly.
    // entry: './src/index.js',

    // output: {
    //     filename: 'main.js',
    //     path: './dist'
    // },

    module: {
        rules: [
        //   {
        //     test: /\.js$/,
        //     exclude: /node_modules/,
        //     use: {
        //       loader: "babel-loader"
        //     }
        //   },
        //   {
        //     test: /\.html$/,
        //     use: [
        //       {
        //         loader: "html-loader",
        //         options: { minimize: true }
        //       }
        //     ]
        //   },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader" ]
        },
        {
            test: /\.(jpg | png)$/,
            use: ["url-loader" ]
        }

        ]
      },
      plugins: [
        new HtmlWebPackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        })
        // new MiniCssExtractPlugin({
        //     filename: "main.css",
        //     chunkFilename: "main.css"
        // })
      ]

};