const path = require("path");

module.exports = {
  mode: "production",
  entry: "./ts-out/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "commonjs",
    globalObject: "this",
  },
  target: ["node"],
};
