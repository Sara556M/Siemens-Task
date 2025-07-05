const path = require('path');

module.exports = {
  before: (browser) => {
    browser.maximizeWindow();
  },

  'TC_CU_01 – Valid Form Submission': (browser) => {
    const contact = browser.page.contactPage();

    contact
      .navigate()
      .click('@customerServiceOption')
      .setValue('@email', 'tester@example.com')
      .setValue('@message', 'Hello, this is a valid message.')
      .click('@submitButton')
      .waitForElementVisible('@successAlert', 3000);
  },

  'TC_CU_02 – Missing Subject Heading': (browser) => {
    const contact = browser.page.contactPage();

    contact
      .navigate()
      // no click on subject
      .setValue('@email', 'user@domain.com')
      .setValue('@message', 'Testing missing subject.')
      .click('@submitButton')
      .waitForElementVisible('@errorAlert', 3000);
  },

  'TC_CU_03 – Missing Email Address': (browser) => {
    const contact = browser.page.contactPage();

    contact
      .navigate()
      .click('@customerServiceOption')
      // no email
      .setValue('@message', 'Testing missing email.')
      .click('@submitButton')
      .waitForElementVisible('@errorAlert', 3000);
  },

  'TC_CU_04 – Invalid Email Format': (browser) => {
    const contact = browser.page.contactPage();

    contact
      .navigate()
      .click('@customerServiceOption')
      .setValue('@email', 'invalid-email')
      .setValue('@message', 'Testing invalid email format.')
      .click('@submitButton')
      .waitForElementVisible('@errorAlert', 3000);
  },

  'TC_CU_05 – Missing Message Body': (browser) => {
    const contact = browser.page.contactPage();

    contact
      .navigate()
      .click('@customerServiceOption')
      .setValue('@email', 'valid@domain.com')
      // no message
      .click('@submitButton')
      .waitForElementVisible('@errorAlert', 3000);
  },

  'TC_CU_06 – Upload Valid File Only': (browser) => {
    const contact = browser.page.contactPage();
    const filePath = path.resolve(__dirname + '/../files/sample.txt');

    contact
      .navigate()
      // no subject, no email, no message
      .setValue('xpath', contact.getFileUploadXPath(), filePath)
      .click('@submitButton')
      .waitForElementVisible('@errorAlert', 3000);
  },

  'TC_CU_07 – Upload Invalid File Type': (browser) => {
    const contact = browser.page.contactPage();
    const badFile = path.resolve(__dirname + '/../files/malware.exe');

    contact
      .navigate()
      .click('@customerServiceOption')
      .setValue('@email', 'x@y.com')
      .setValue('@message', 'Testing invalid file type.')
      .setValue('xpath', contact.getFileUploadXPath(), badFile)
      .click('@submitButton')
      .waitForElementVisible('@errorAlert', 3000);
  },

  'TC_CU_08 – Required Fields Only': (browser) => {
    const contact = browser.page.contactPage();

    contact
      .navigate()
      .click('@customerServiceOption')
      .setValue('@email', 'ok@ok.com')
      .setValue('@message', 'Testing required only.')
      .click('@submitButton')
      .waitForElementVisible('@successAlert', 3000);
  },

  after: (browser) => browser.end()
};
