require('@remy/envy');
const webpack = require('webpack');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  env: {
    SERVER: 'https://ariskorona.herokuapp.com',
    MAPBOX_TOKEN: 'pk.eyJ1IjoiYXJpc21hcmtvIiwiYSI6ImNrYnJ0eWluNjI2MG0yd3I1a2N0c2V5bjYifQ.TDuvrgley6JmdxziGoXmlQ'
  },
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
});
