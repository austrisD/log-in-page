const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
    assetModuleFilename: "./[name].[ext]",
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "./css/[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
        type: "javascript/auto",
      },

      {
        test: /\.(png|jpe?g|gif')$/i,
        loader: "file-loader",
        options: {
          name: "images/[name].[ext]",
        },
        type: "javascript/auto",
      },

      {
        test: /\.(php)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
        type: "javascript/auto",
      },

      {
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      },
    ],
  },
};
