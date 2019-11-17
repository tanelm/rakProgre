const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "production",
    entry: './src/index.jsx',
    output: {
        path:path.resolve(__dirname, 'dist'),
        filename: 'static/bundle.js'
    },
    performance: { hints: false },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin([
            {
            from: 'public',
            }
        ]),
        new CopyPlugin([
          {
          from: 'public/img',
          to: "static/img"
          }
      ])
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            enforce: 'pre',
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
            options: {
              failOnError: true,
            },
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use:  "babel-loader",
          }
        ]
      },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        contentBase: './',
        hot: true,
        port: 9000,
        proxy: {
          '/api': 'http://localhost:3000'
        }
      }
};