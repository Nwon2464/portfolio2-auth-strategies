const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VENDOR_LIBS = [
  "axios",
  "lodash",
  "react",
  "react-dom",
  "react-redux",
  "react-router-dom",
  "redux",
  "redux-form",
  "redux-thunk",
];
module.exports = {
  entry: {
    bundle: "./src/index.js",
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
    //chunkhash => detect even small amount of modification in bundle
    //which does frequently changes =>cache busting
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: { limit: 40000 },
          },
          "image-webpack-loader",
        ],
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "manifest"],
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
};
