/* eslint-disable @typescript-eslint/no-var-requires */
require('ts-node').register();

const path = require('path');
const slsw = require('serverless-webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: slsw.lib.entries,
  output: {
    libraryTarget: 'commonjs2',
    path: path.resolve('.webpack'),
    filename: '[name].js',
  },
  stats: 'errors-only',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(j|t)s$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  { targets: { node: '14' }, useBuiltIns: 'usage', corejs: 3 },
                ],
              ],
            },
          },
          'ts-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.cjs', '.mjs', '.js', '.ts'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve('../../tsconfig.base.json'),
      }),
    ],
  },
  mode: 'development',
};
