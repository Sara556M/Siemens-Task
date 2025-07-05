module.exports = {
  url: 'http://automationpractice.multiformis.com',
  elements: {
    // Input field used to search for products
    searchInput: {
      selector: '#search_query_top'
    },

    // Search button next to the input field
    searchButton: {
      selector: 'button[name="submit_search"]'
    },

    // Container that holds the search result list
    searchResults: {
      selector: '.product_list'
    },

    // All product name elements in the search results
    productNames: {
      selector: '.product-name'
    }
  },

  // Custom command to get productNames selector safely
  commands: [{
    getProductNameSelector() {
      return this.elements.productNames.selector;
    }
  }]
};
