const { resolve, join } = require('path');

const clientPath = join(process.cwd(), 'src', 'client');
const buildPath = join(process.cwd(), 'build', 'client');

module.exports = {
  target: 'web',
  entry: ['babel-polyfill', `${clientPath}/index.js`],
  output: {
    publicPath: '/',
    path: resolve(buildPath, 'client'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: ['node_modules', clientPath],
    alias: {
      actions: join(clientPath, 'actions'),
      components: join(clientPath, 'components'),
      config: join(clientPath, 'config'),
      constants: join(clientPath, 'constants'),
      containers: join(clientPath, 'containers'),
      reducers: join(clientPath, 'reducers'),
      selectors: join(clientPath, 'selectors')
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  stats: {
    assetsSort: '!size',
    children: false,
    chunks: false,
    colors: true,
    entrypoints: false,
    modules: false
  }
};
