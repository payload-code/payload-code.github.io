const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getEntryApps = () => {
  const entryPoints = {};
  const jsxFiles = glob.sync(path.join(__dirname, 'src/js/components/*.jsx'));

  jsxFiles.forEach((file) => {
    const name = path.basename(file, '.jsx');
    entryPoints[name] = file;
  });

  return entryPoints;
};

const entry = getEntryApps();

const getHtmlPlugins = () => {
  const htmlFiles = glob.sync(path.join(__dirname, 'src/*.html'));
  return htmlFiles.map((htmlFile) => {
    const name = path.basename(htmlFile, '.html');
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: htmlFile,
      inject: true,
    });
  });
};

module.exports = {
  entry,
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
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
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [...getHtmlPlugins()],
};
