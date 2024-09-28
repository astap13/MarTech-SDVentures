const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', 

  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'dist'), 
  },

  module: {
    rules: [
      {
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'], 
      },
      {
        test: /\.scss$/, // для SCSS файлов
        use: ['style-loader', 'css-loader', 'sass-loader'], // применяем лоадеры
      },
    ],
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), 
    },
    open: true, 
  },

  mode: 'development', 
};
