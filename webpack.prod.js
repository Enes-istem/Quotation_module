const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
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
        "@typesreact-router-dom": { requiredVersion: deps["@types/react-router-dom"], singleton: true} ,

      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
