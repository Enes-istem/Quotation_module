const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3001,
  },
  output: {
    publicPath: 'http://localhost:3001/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'quotationmodule',
      library: { type: 'var', name: 'quotationmodule' },
      filename: 'remoteEntry.js',
      exposes: {
        // expose each component
        // './CounterAppOne': './src/components/CounterAppOne',
        './QuotationModule': './src/components/QuotationModule',

      },
      shared: {
        ...deps,
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-dom'],
        },
        "react-router-dom": { requiredVersion: deps["react-router-dom"], singleton: true} ,

      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
