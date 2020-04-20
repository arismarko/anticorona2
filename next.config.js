require('@remy/envy');
const webpack = require('webpack');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/api/addstores": {page: "/api/addstores"},
      "/p/hello-nextjs": {page: "/api/stores", query: { query: 'toiletroll' }},
      "/p/hello-nextjs": {page: "/api/stores", query: { query: 'bread' }},
      "/p/hello-nextjs": {page: "/api/stores", query: { query: 'pasta' }}
      }
    }
});
