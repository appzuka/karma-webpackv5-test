
module.exports = function (config) {
  const tests = './src/**/*.spec.js';

  config.set({
    singleRun: true,
    frameworks: ['jasmine', 'webpack'],
    files: [tests],
    preprocessors: {
      [tests]: ['webpack']
    },
    webpack: webpackConfig(),
    webpackMiddleware: {
      noInfo: true
    },
    colors: true,
    browsers: ['Chrome'],
  });


};

function webpackConfig() {
  const config = require('./webpack.config.js');
  delete config.context;
  delete config.entry;
  delete config.output;
 // delete config.devServer;

  return config;
}

