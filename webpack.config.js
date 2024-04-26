const path = require('path');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');

module.exports = {
  mode: 'development',

  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: (pathData) => {
      const filepath = path
        .dirname(pathData.filename)
        .split('/')
        .slice(1)
        .join('/');
      return `${filepath}/[name][ext][query]`;
    },
  },

  resolve: {
    alias: {
      '@scripts': path.join(__dirname, 'src/js'),
      '@styles': path.join(__dirname, 'src/scss'),
      '@images': path.join(__dirname, 'src/img'),
    },
  },

  plugins: [
    new HtmlBundlerPlugin({
      // define templates here
      entry: {
        index: 'src/index.html', // => dist/index.html
        products: 'src/products.html', // => dist/about.html
      },
      js: {
        // output filename of compiled JavaScript
        filename: 'js/[name].[contenthash:8].js',
      },
      css: {
        // output filename of extracted CSS
        filename: 'css/[name].[contenthash:8].css',
      },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(s?css)$/,
        use: [
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(ico|png|jp?g|svg|gif|webp)/,
        type: 'asset',
        // generator: {
        //   filename: 'img/[name].[hash:8][ext]',
        // },
        parser: {
          dataUrlCondition: {
            maxSize: 2 * 1024, // inline images < 2 KB
          },
        },
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },

  // enable HMR with live reload
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    watchFiles: {
      paths: ['src/**/*.*'],
      options: {
        usePolling: true,
      },
    },
  },
};
