// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'angular-cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-remap-istanbul'),
      require('angular-cli/plugins/karma')
    ],
    files: [
      {pattern: './src/test.ts', watched: false},
      {pattern: './src/assets/Cesium/Assets/*.json', watched: false, 'included': false},
      {pattern: './src/assets/Cesium/Assets/**/*.json', watched: false, 'included': false},
      {pattern: './src/assets/Cesium/Widgets/Images/**/*.png', watched: false, 'included': false},
      {pattern: './src/assets/Cesium/Widgets/Images/**/*.svg', watched: false, 'included': false},
      {pattern: './src/assets/Cesium/Assets/Textures/**/*.jpg', watched: false, 'included': false},
      {pattern: './src/assets/Cesium/Assets/Textures/*.jpg', watched: false, 'included': false},
    ],
    proxies: {
      "/assets/": "/base/src/assets/"
    },
    preprocessors: {
      './src/test.ts': ['angular-cli']
    },
    remapIstanbulReporter: {
      reports: {
        html: 'coverage',
        lcovonly: './coverage/coverage.lcov'
      }
    },
    angularCli: {
      config: './angular-cli.json',
      environment: 'dev'
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    reporters: ['progress', 'karma-remap-istanbul'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
