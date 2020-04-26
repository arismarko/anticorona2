require('@remy/envy');
const webpack = require('webpack');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  env: {
    SERVER: 'https://ariskorona.herokuapp.com',
    MAPBOX_TOKEN: 'pk.eyJ1IjoiYXJpc21hcmtvIiwiYSI6ImNrOGNidW13eTAwdXgzbm1sYXRicnI4NHQifQ.IMOWmDcDojDN2bUVdSO5AA'
  },
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
});
