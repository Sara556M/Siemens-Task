module.exports = {
  src_folders: ['tests'],
  page_objects_path: ['page-objects'],
  output_folder: 'tests_output',

  webdriver: {
    start_process: true,
    port: 9515,
    cli_args: ['--verbose']
    // server_path is auto-detected from node_modules/.bin
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
