
let app = require('./package.json').name;

module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  output: {
    library: `${app}-[name]`,
    libraryTarget: 'umd',
    jsonpFunction: `webpackJsonp_${app}`,
  },
};

