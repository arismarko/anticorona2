require('@remy/envy');
const webpack = require('webpack');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  webpack: config => {
    return config;
  },
});