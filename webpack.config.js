var webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

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
            use: ["style-loader", 
            {
                loader: "css-loader?sourceMap",
                options: { minimize: true }
            
            }] //sourceMap enables devtool
        },
        {
            test: /\.(jpg|png|gif|svg)$/,
            use: ["url-loader" ]
        },
        {
            test: /\.(scss|sass)$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                {
                    loader: "css-loader?sourceMap",
                    options: { minimize: true }
                
                }, // translates CSS into CommonJS
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
        new CleanWebpackPlugin(['dist'])
        // new webpack.optimize.UglifyJsPlugin()
        // new MiniCssExtractPlugin({
        //     filename: "[name].css",
        //     chunkFilename: "[id].css"
        // })
      ]

};