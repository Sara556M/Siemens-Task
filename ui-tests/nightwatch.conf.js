const path = require('path');
const isWindows = process.platform === 'win32';

const chromedriverPath = isWindows
  ? path.resolve(__dirname, 'node_modules/chromedriver/lib/chromedriver/chromedriver.exe')
  : '/usr/local/bin/chromedriver';  // لو تستخدم لينوكس أو ماك، عدل المسار حسب مكان chromedriver

module.exports = {
  src_folders: ['tests'],
  page_objects_path: ['page-objects'],
  output_folder: 'tests_output',

  webdriver: {
    start_process: true,
    server_path: chromedriverPath,
    port: 9515,
    cli_args: ['--verbose']
  },

  test_settings: {
    chrome_headless: {
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
    }
  }
};
