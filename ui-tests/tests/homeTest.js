module.exports = {
  '@tags': ['search'],

  /**
   * Test Case: Search for "dress" and verify search result count and text content
   * Description: Confirms the system displays 7 products in total, 5 of which contain "dress" in their text,
   *              and 2 that do not (irrelevant results).
   */
  'TC:Search for "dress" and verify results': function (browser) {
    const homePage = browser.page.homePage();
    const productLinkSelector = '.product_list .product-container a.product-name';

    // Step 1: Navigate to the homepage and perform a search for "dress"
    homePage
      .navigate()
      .waitForElementVisible('body', 1000)
      .setValue('@searchInput', 'dress')
      .click('@searchButton')
      .waitForElementVisible('@searchResults', 5000);

    // Step 2: Retrieve all product name links from the search results
    browser.elements('css selector', productLinkSelector, function (result) {
      const items = result.value;
      const totalFound = items.length;

      let dressCount = 0;
      let nonDressCount = 0;
      let processed = 0;

      // Step 3: Check the text content of each product link
      items.forEach((item) => {
        const id = item['element-6066-11e4-a52e-4f735466cecf'] || item.ELEMENT;

        browser.elementIdText(id, function (textResult) {
          const text = textResult.value.toLowerCase();

          if (text.includes('dress')) {
            dressCount++;
          } else {
            nonDressCount++;
          }

          processed++;

          // Step 4: Once all elements are processed, assert the expected counts
          if (processed === totalFound) {
            browser.perform(() => {
              browser.assert.strictEqual(totalFound, 7, `Expected 7 total products, found: ${totalFound}`);
              browser.assert.strictEqual(dressCount, 5, `Expected 5 products containing "dress", found: ${dressCount}`);
              browser.assert.strictEqual(nonDressCount, 2, `Expected 2 unrelated products, found: ${nonDressCount}`);
            });
          }
        });
      });
    });

    // Step 5: Close browser after test
    browser.end();
  }
};
