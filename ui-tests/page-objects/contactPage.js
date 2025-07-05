// page-objects/contactPage.js
module.exports = {
  // URL for the Contact Us page
  url: 'http://automationpractice.multiformis.com/index.php?controller=contact',

  elements: {
    // Dropdown menu for subject heading (e.g., Customer Service, Webmaster)
    subjectHeading: {
      selector: 'select[name="id_contact"]'
    },

    // Input field for the user's email address
    email: {
      selector: 'input#email'
    },

    // Text area for the user's message content
    message: {
      selector: 'textarea#message'
    },

    // Input for the order reference
    orderReference: {
      selector: 'input#id_order'
    },

    // File input for uploading attachments
    fileUpload: {
      selector: 'input#fileUpload'
    },

    // Submit button to send the contact form
    submitButton: {
      selector: 'button[name="submitMessage"]'
    },

    // Alert element shown after a successful submission
    successAlert: {
      selector: '.alert-success'
    },

    // Alert element shown after a failed submission (e.g., validation error)
    errorAlert: {
      selector: '.alert-danger'
    },

    // Specific option in the dropdown for "Customer service"
    customerServiceOption: {
      selector: 'select#id_contact option[value="2"]'
    }
  },

  // Custom reusable command for XPath used with file upload
  commands: [{
    getFileUploadXPath() {
      return '//input[@type="file" and @id="fileUpload"]';
    }
  }]
};