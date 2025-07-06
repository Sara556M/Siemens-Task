module.exports = {
  src_folders: ['tests'],
  page_objects_path: ['page-objects'],
  output_folder: 'tests_output',
  custom_commands_path: '',
  custom_assertions_path: '',
  globals_path: '',

  webdriver: {
    start_process: true,
    port: 9515,
    server_path: '', // Let CircleCI handle ChromeDriver
    log_path: 'logs',
    cli_args: [
      '--verbose'
    ]
  },

  test_settings: {
    default: {
      launch_url: 'http://automationpractice.multiformis.com',
      selenium_host: 'localhost',
      silent: true,
      screenshots: {
        enabled: true,
        path: 'screenshots',
        on_failure: true,
        on_error: true
      }
    },

    chrome_headless: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: [
            '--headless=new',
            '--disable-gpu',
            '--no-sandbox',
            '--disable-dev-shm-usage',
            '--window-size=1280,800'
          ],
          binary: '/usr/bin/google-chrome' // Explicit path for CircleCI
        }
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: [
            '--disable-gpu',
            '--no-sandbox',
            '--window-size=1280,800'
          ],
          binary: '/usr/bin/google-chrome'
        }
      }
    }
  },

  test_runner: {
    type: 'mocha',
    options: {
      ui: 'bdd',
      reporter: 'list'
    }
  }
};