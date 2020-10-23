
module.exports = function (config) {
  const tests = ['./src/fill*.spec.+(ts|tsx|js)'];

  config.set({
    singleRun: true,
    frameworks: ['jasmine', 'webpack'],
    files: tests,
  //   files: [
  //     "src/fillBodyjs.spec.js", // *.tsx for React Jsx
  //     "src/fillBodyts.spec.ts", // *.tsx for React Jsx
  //     "src/fillBodytsx.spec.tsx" // *.tsx for React Jsx
  // ],
    // preprocessors: {
    //   "**/*\.spec\.(ts|tsx)": "webpack",
    //   "**/*\.spec\.ts": "webpack",
    //   "**/*\.spec\.tsx": "webpack",
    //   // "**/*\.spec\.tsx": "webpack",
    //   "**/*.spec.js": "webpack",
    //   // "**/*.ts": "webpack", // *.tsx for React Jsx
    //   // "**/*.ts": "webpack", // *.tsx for React Jsx
    // },
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

