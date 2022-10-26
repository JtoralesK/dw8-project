const path = require("path");
const dev = process.env.NODE_ENV == "development";
const live = require("live-server")
if(dev){
  console.log("estoy en modo local");
  live.start({
    root:"./",
    "file":"index.html"
  })
}
module.exports = {
  watch: dev,
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
       {    
        loader: "css-loader",
        options: {
          modules: true,
        }
      },],
      },
     
    ],
  
  },
  resolve: {
    extensions: [ '.js','.jsx', '.ts', '.tsx']  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    sourceMapFilename: "[name].js.map"
  },
  devtool: "source-map"
};