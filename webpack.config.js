const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getEntryApps = () => {
  const entryPoints = {};

  const files = glob.sync(path.join(__dirname, 'src', 'js', '**', '*.{js,jsx}').replace(/\\/g, '/'));

  files.forEach((file) => {
    const ext = path.extname(file);
    const name = path.basename(file, ext);
    entryPoints[name] = file;
  });

  return entryPoints;
}

const generateHtmlPlugins = () => {
  const templateFiles = glob.sync(path.join(__dirname, 'src', '*.html'));
  return templateFiles.map(item => {
    const name = path.basename(item, '.html');
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.join(__dirname, 'src', `${name}.html`),
      inject: true,
      chunks: [name],
    });
  });
};
const htmlPlugins = generateHtmlPlugins();

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
    ...htmlPlugins,
  ],
};
