const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getEntryApps = () => {
  const entryPoints = {};
  const jsxFiles = glob.sync(path.join(__dirname, 'src', 'js', 'components', '*.jsx').replace(/\\/g, '/'));

  jsxFiles.forEach((file) => {
    const name = path.basename(file, '.jsx');
    entryPoints[name] = file;
  });

  return entryPoints;
}

const entry = getEntryApps()

module.exports = {
  entry,
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  mode: 'development',
  devServer: {
    port: 4040,
    devMiddleware: {
      writeToDisk: true,
    },
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react',],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [
      new HtmlWebpackPlugin( {
        filename: 'material-ui-add-payment-details.html',
        template: path.join(__dirname, 'src', 'material-ui-add-payment-details.html'),
        inject: true,
        chunks: ['material-ui-add-payment-details'],
        }),
      new HtmlWebpackPlugin( {
        filename: 'material-ui-make-payment.html',
        template: path.join(__dirname, 'src', 'material-ui-make-payment.html'),
        inject: true,
        chunks: ['material-ui-make-payment'],
      }),
      new HtmlWebpackPlugin( {
        filename: 'bootstrap4-checkout-with-billing-address.html',
        template: path.join(__dirname, 'src', 'bootstrap4-checkout-with-billing-address.html'),
        inject: true,
        chunks: ['bootstrap4-checkout-with-billing-address'],
      })],
};
