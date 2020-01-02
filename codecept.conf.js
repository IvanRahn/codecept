const {setHeadlessWhen} = require('@codeceptjs/configure');
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './testsoutput',
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  },
  helpers: {
    WebDriver: {
      url: 'http://healthshare.test',
      browser: 'chrome',
      smartWait: 5000,
      windowSize: '1920x1680',
    },
    "ResembleHelper" : {
      "require": "codeceptjs-resemblehelper",
      "screenshotFolder" : "./tests/output/",
      "baseFolder": "./tests/screenshots/base/",
      "diffFolder": "./tests/screenshots/diff/"
    },
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'browsertest'
}