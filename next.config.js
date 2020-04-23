require('@remy/envy');
const webpack = require('webpack');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  env: {
    SERVER: 'https://ariskorona.herokuapp.com',
  },
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
});
