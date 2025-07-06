module.exports = {
  src_folders: ["tests"],
  page_objects_path: ["page-objects"],
  output_folder: "tests_output",
  custom_commands_path: "",
  custom_assertions_path: "",

  // WebDriver Settings
  webdriver: {
    start_process: true,
    port: 9515,
    server_path: "", // Let Nightwatch auto-detect Chromedriver
    cli_args: ["--verbose"],
  },

  // Test Settings
  test_settings: {
    default: {
      launch_url: "http://automationpractice.multiformis.com",
      desiredCapabilities: {
        browserName: "chrome",
        "goog:chromeOptions": {
          args: [
            "--headless=new",
            "--disable-gpu",
            "--no-sandbox",
            "--disable-dev-shm-usage",
            "--window-size=1280,800",
          ],
        },
      },
      screenshots: {
        enabled: true,
        path: "screenshots",
        on_failure: true,
        on_error: true,
      },
    },

    chrome_headless: {
      extends: "default", // Inherits from default settings
    },

    chrome: {
      extends: "default",
      desiredCapabilities: {
        browserName: "chrome",
        "goog:chromeOptions": {
          args: ["--disable-gpu", "--no-sandbox", "--window-size=1280,800"],
        },
      },
    },
  },
};