const { defineConfig } = require('cypress');

// these variables will get updated for prod as the scripts are built

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 6000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    env: {
      endpoint: 'https://www.jobstarter.org.za/public-landing',
      email: 'jsauto@qa.team',
      password: 'P@ssw0rd1!',
      name: 'JobStarterTester',
      cmsPassword: 'Imawesome1!',
      cmsUsername: 'reinhardt@swipeix.com',
      cmsEndpoint: 'https://api-staging.jobstarter.org.za/admin_users/sign_in',
      cvStatement: 'This is my test statement. !@#%^&(*& 9827364  JKHSD FKGSHDGF SDfj hs',
      mobile_number: '0731231231',
      address_line_1: 'Eversdal Heights',
      institutionName: 'School of Hogwards',
      spell: 'Learning to cast magic',
      interest: 'I like to work in my free time',
      achievement: 'I did a lot of things in my life',
      WECompany: 'Testing company',
      WEPosition: 'Automation tester',
      WEJobDescription: 'I write automation code for this company',
      refName: 'Toto Wolff',
      refCompany: 'Testing Company',
      refNumber: '0791236487',
      refEmail: 'testingemail@tc.com',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
