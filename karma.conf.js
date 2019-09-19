module.exports = function (config) {
  config.set({
      frameworks: ['mocha', 'chai'],
      files: [
          'src/**/*.js',
          'test/**/*spec.js'
      ],
      reporters: ['progress'],
      port: 9876,  // karma web server port
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      concurrency: Infinity
  })
}