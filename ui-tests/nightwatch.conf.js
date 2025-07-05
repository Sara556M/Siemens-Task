module.exports = {
  src_folders: ['tests'],
  page_objects_path: ['page-objects'],

  webdriver: {
    start_process: true,
    server_path: '/usr/local/bin/chromedriver',
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
            '--no-sandbox',
            '--disable-dev-shm-usage',
            '--window-size=1280,800'
          ]
        },
        acceptInsecureCerts: true
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
