const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');
const PKG = require('./package.json');

module.exports = {
  src_folders: ['tests'],
  output_folder: './reports',
  page_objects_path: './page-objects',
  globals_path: './globals.js',

  selenium: {
    start_process: true,
    server_path: './node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.9.1.jar',
    host: '127.0.0.1',
    port: 4445,
    cli_args: {
      'webdriver.chrome.driver': './node_modules/.bin/chromedriver',
      'webdriver.gecko.driver': './node_modules/.bin/geckodriver'
    }
  },

  test_settings: {
    default: {
      launch_url: 'http://automationpractice.multiformis.com',
      selenium_host: 'localhost',
      selenium_port: 4445,
      screenshots: {
        enabled: true,
        path: 'screenshots',
        on_failure: true,
        on_error: true
      },
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: [
            'headless',
            'no-sandbox',
            'disable-dev-shm-usage',
            'window-size=1280,800'
          ]
        }
      }
    },

    circleci: {
      output_folder: process.env.CIRCLE_TEST_REPORTS || './reports'
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome'
      }
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox'
      }
    }
  }
};

module.exports.TEST_RESULTS_PATH = './reports';
