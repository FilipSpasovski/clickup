const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 20000,
  requestTimeout: 30000,
  responseTimeout: 30000,


  e2e: {
     
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }, env: {
      clickupApiKey: 'pk_152459639_07C41BKIWCFHQ5N143VPPOJLMYTMHDU3',
      teamId: '9012380471'
    }
  },
});
