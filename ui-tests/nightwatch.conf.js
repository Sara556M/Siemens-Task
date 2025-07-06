// nightwatch.conf.js
module.exports = {
  src_folders: ['tests'],
  page_objects_path: ['page-objects'],
  output_folder: 'tests_output',

  webdriver: {
    start_process: true,
    port: 9515,
    server_path: require('chromedriver').path // This is important to use the npm installed chromedriver
  },

  test_settings: {
    default: { // It's good practice to have a 'default' setting
        launch_url: 'http://automationpractice.multiformis.com',
        desiredCapabilities: {
            browserName: 'chrome',
            chromeOptions: {
                args: [
                    '--headless=new',
                    '--disable-gpu',
                    '--no-sandbox',
                    '--disable-dev-shm-usage',
                    '--window-size=1280,800'
                ]
            }
        },
        screenshots: {
            enabled: true,
            path: 'screenshots',
            on_failure: true,
            on_error: true
        }
    },
    chrome_headless: {
      // This can inherit from default or define specific headless settings
      // Your provided chrome_headless settings are fine, but ensure the `server_path` is correctly set.
      launch_url: 'http://automationpractice.multiformis.com',
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: [
            '--headless=new',
            '--disable-gpu',
            '--no-sandbox',
            '--disable-dev-shm-usage',
            '--window-size=1280,800'
          ]
        }
      },
      screenshots: {
        enabled: true,
        path: 'screenshots',
        on_failure: true,
        on_error: true
      }
    },
    chrome: { // For 'test:debug' locally
        launch_url: 'http://automationpractice.multiformis.com',
        desiredCapabilities: {
            browserName: 'chrome',
            chromeOptions: {
                args: [
                    '--window-size=1280,800'
                ]
            }
        }
    }
  }
};