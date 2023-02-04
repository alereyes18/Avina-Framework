// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
 const isProduction = process.env.NODE_ENV == "production";

 
const config = {
   devServer: {
    // Can be omitted unless you are using 'docker' 
    host: '0.0.0.0',
  },
  entry: {
    avina : "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename:"avina.js",
    library: "AvinaFramework",
    libraryTarget:"umd",
    globalObject:"this",
    umdNamedDefine:true
  }, 
  plugins: [


 
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [ "style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [ "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  
  if (isProduction) {
    config.mode = "production";
 
  } else {
    config.mode = "development";
   }
  return config;
  
};
