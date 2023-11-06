const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: () => {
    const entryPoints = {};
    const jsxFiles = glob.sync(path.join(__dirname, 'src/js/components/*.jsx'));

    jsxFiles.forEach((file) => {
      const name = path.basename(file, '.jsx');
      entryPoints[name] = file;
    });

    return entryPoints;
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devServer: {
    port: 4040,
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
  plugins: generateHtmlPlugins('./src'),
};

function generateHtmlPlugins(sourceDir) {
  const files = glob.sync(path.join(sourceDir, '**', '*.html'));
  return files.map((file) => {
    return new HtmlWebpackPlugin({
      filename: path.relative(sourceDir, file),
      template: file,
      chunks: [],
    });
  });
}
