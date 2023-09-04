const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    env: {
      endpoint: 'https://staging.jobstarter.org.za/',
      email: 'jsauto@qa.team',
      password: 'P@ssw0rd1!',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
