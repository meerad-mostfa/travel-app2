const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // Entry point for the application
  entry: './src/client/index.js',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  // Development mode
  mode: 'development',

  // Dev server configuration
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 8080,
    open: true, // Automatically open the browser
  },

  // Module rules
  module: {
    rules: [
      {
        // JavaScript files
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        // SCSS files
        test: /\.scss$/,
        use: [
          'style-loader', // Injects styles into DOM
          'css-loader',   // Turns CSS into CommonJS
          'sass-loader',  // Compiles Sass to CSS
        ],
      },
    ],
  },

  // Plugins
  plugins: [
    // Generate an HTML file
    new HtmlWebpackPlugin({
      template: './src/client/views/index.html',
      filename: 'index.html',
    }),

    // Clean the dist folder
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: true, // Remove old assets
      protectWebpackAssets: false,   // Do not protect existing assets
    }),
  ],
};
