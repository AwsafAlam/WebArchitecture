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

    devtool: 'eval',
    module: {
        rules: [
        { // For using ES6 code
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
        },
        { // For loading images from the HTML
        test: /\.html$/,
        use: [
            {
            loader: "html-loader",
            options: { minimize: true }
            }
        ]
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader?sourceMap" ] //sourceMap enables devtool
        },
        {
            test: /\.(jpg|png|gif|svg)$/,
            use: ["url-loader" ]
        },
        {
            test: /\.(scss|sass)$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader?sourceMap", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }

        ]
      },
      plugins: [
        new HtmlWebPackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        }),
        // new webpack.optimize.UglifyJsPlugin()
        // new MiniCssExtractPlugin({
        //     filename: "main.css",
        //     chunkFilename: "main.css"
        // })
      ]

};