module.exports = {
  src_folders: ['tests'],
  page_objects_path: ['page-objects'],

  webdriver: {
    start_process: true,
    server_path: require('chromedriver').path,
    port: 9515,
    cli_args: [
      '--verbose'
    ]
  },

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'http://automationpractice.multiformis.com',
      screenshots: {
        enabled: true,
        path: 'screenshots',
        on_failure: true,
        on_error: true
      },
      desiredCapabilities: {
        browserName: 'chrome',
        acceptInsecureCerts: true
      }
    },
    
    chrome_headless: {
      extends: 'default',
      desiredCapabilities: {
        chromeOptions: {
          args: [
            '--headless=new',
            '--no-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu',
            '--window-size=1280,800'
          ]
        }
      }
    },
    
    chrome: {
      extends: 'default',
      desiredCapabilities: {
        chromeOptions: {
          args: [
            '--no-sandbox',
            '--disable-dev-shm-usage',
            '--window-size=1280,800'
          ]
        }
      }
    }
  }
};