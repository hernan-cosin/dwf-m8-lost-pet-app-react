const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
var liveServer = require("live-server");
const dev = process.env.NODE_ENV == "development";

if (dev) {
  var params = {
    file: "./index.html",
  };

  liveServer.start(params);
}

module.exports = {
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  mode: process.env.NODE_ENV,
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          { loader: "css-loader", options: { modules: true } },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".js", ".ts"],

    plugins: [
      new TsconfigPathsPlugin({
        /* options: see below */
      }),
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
