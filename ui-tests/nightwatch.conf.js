module.exports = {
  src_folders: ['tests'],
  page_objects_path: ['page-objects'],
  output_folder: 'tests_output',

  webdriver: {
    start_process: true,
    port: 9515,
    // For CircleCI, use the chromedriver from the 'cimg/node-browsers' image.
    // For local runs, this path will be empty, and Nightwatch will find
    // the chromedriver from your system's PATH.
    server_path: process.env.CI ? '/usr/local/bin/chromedriver' : ''
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
            '--no-sandbox', // This is critical for running in Docker containers
            '--disable-dev-shm-usage', // Good practice for CI environments
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
    // You can add your 'chrome' environment for local debugging here as well
  }
};