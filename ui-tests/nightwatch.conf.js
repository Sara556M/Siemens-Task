const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

module.exports = {
  src_folders: ['tests'],
  page_objects_path: ['page-objects'],
  output_folder: 'tests_output',

  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': chromedriver.path,
      'webdriver.gecko.driver': geckodriver.path
    }
  },

  test_settings: {
    default: {
      launch_url: 'http://automationpractice.multiformis.com',
      selenium_host: '127.0.0.1',
      selenium_port: 4444,
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['--headless', '--no-sandbox', '--disable-gpu']
        }
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['--headless', '--no-sandbox', '--disable-gpu']
        }
      }
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox'
      }
    }
  }
};
