module.exports = {
  src_folders: ['tests'],
  page_objects_path: ['page-objects'],
  output_folder: 'tests_output',
  webdriver: {
    start_process: true,
    port: 9515,
    server_path: '', // Let CircleCI handle ChromeDriver
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
          ],
          binary: '/usr/bin/google-chrome' // Explicit Chrome path
        }
      },
      screenshots: {
        enabled: true,
        path: 'screenshots',
        on_failure: true
      }
    }
  }
};