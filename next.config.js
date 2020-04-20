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
      "/": { page: "/", query: { missings: 'toiletroll' } },
      "/api/addstores": {page: "/api/addstores"},
      "/p/hello-nextjs": {page: "/api/stores", query: { missings: 'toiletroll' }},
      "/p/hello-nextjs": {page: "/api/stores", query: { missings: 'bread' }},
      "/p/hello-nextjs": {page: "/api/stores", query: { missings: 'pasta' }}
      }
    }
});
