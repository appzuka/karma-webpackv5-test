var HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: {
    'app': './index.js'
  },
  output: {
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },

  // loaders
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader', options: {
              // disable type checker - we will use it in fork plugin
              transpileOnly: true
            },

          }
        ]
      }
    ]
  },
  plugins: [new ForkTsCheckerWebpackPlugin()]
};
