require('@remy/envy');
const webpack = require('webpack');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  webpack: config => {
    return config;
  },
});

module.exports = {
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/api/": {
        page: "/stores/[slug]",
        query: { missings: "toiletroll" }
      },
      "/api/addstores": {page: "/api/addstores"}
      }
    }
}
