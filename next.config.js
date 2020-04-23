require('@remy/envy');
const webpack = require('webpack');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  env: {
    SERVER: 'https://anticorona2-9vlgwibmc.now.sh/',
  },
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/", query: { missing: 'bread' }  },
      "/api": { page: "/api/stores", query: { missing: 'bread' } },
      }
    }
});
