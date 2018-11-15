const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    showcase: [
      "webpack-hot-middleware/client",
      path.resolve(__dirname, "dev", "showcase.js")
    ],
    dev: [
      "webpack-hot-middleware/client",
      path.resolve(__dirname, "dev", "dev.js")
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.[name].js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css/,
        exclude: /node_modules/,
        loaders: ["style-loader", "postcss-loader"]
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
          cacheDirectory: true,
          plugins: ["react-hot-loader/babel"]
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "showcase.html",
      chunks: ["showcase"],
      template: "./dev/dev.html"
    }),
    new HtmlWebpackPlugin({
      filename: "dev.html",
      chunks: ["dev"],
      template: "./dev/dev.html"
    })
  ]
};
