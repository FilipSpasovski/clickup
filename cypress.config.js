const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout: 20000,
  requestTimeout: 30000,
  responseTimeout: 30000,


  e2e: {
     
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    }, env: {
      clickupApiKey: 'pk_152459639_07C41BKIWCFHQ5N143VPPOJLMYTMHDU3',
      teamId: '9012380471'
    }
  },
});
