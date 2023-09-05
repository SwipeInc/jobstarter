// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('SignUpWithUI', () => {
  cy.viewport(1920, 1080);
  cy.visit(Cypress.env('endpoint'));
  cy.contains('Sign Up').click();
  cy.get('input[name="email"]').type('reinhardttest@qa.team');
  cy.get('input[name="confirm_email"]').type('reinhardttest@qa.team');

  //Commented out the below for testing
  // cy.get('input[name="email"]').type(Cypress.env('email'));
  // cy.get('input[name="confirm_email"]').type(Cypress.env('email'));

  cy.get('input[id="first_name"]').type('JobStarterTester');

  //For some reason the below is not being identified in the env file.
  //cy.get('input[id="first_name"]').type(Cypress.env('name'));

  cy.contains('Continue').click();
  cy.get('input[placeholder="Add a password"]').type(Cypress.env('password'));
  cy.get('input[placeholder="Confirm password"]').type(Cypress.env('password'));
  cy.contains('Sign up').click();
  cy.contains('div', /^Check your email/).should('be.visible');
});

Cypress.Commands.add('ConfirmSignUpAccount', () => {
  cy.viewport(1920, 1080);
  cy.visit('https://qa.team/');
  cy.get('input[type="text"]').type('reinhardttest');
  // cy.get('input[name="email"]').type(Cypress.env('email'));
  cy.get('input[type="submit"]').click();
  cy.get('div[class="pull-left caret"]').click();

  // cy.get('.pre')
  //   .invoke('text')
  //   .then((emailText) => {
  //     // Do something with the extracted text, e.g., assert or log it
  //     cy.log('Extracted Email Body:', emailText);
  //   });
});

Cypress.Commands.add('ActivateUserCMS', () => {
  cy.viewport(1920, 1080);
  cy.visit('https://api-staging.jobstarter.org.za/admin_users/sign_in');
  cy.get('input[id="admin_user_email"]').type('reinhardt@swipeix.com');
  cy.get('input[name="admin_user[password]"]').type('Imawesome1!');
  cy.get('input[type="submit"]').click();
  cy.contains('Candidates').click();
  cy.get('a[href="/candidates"]').click();
  cy.get('input[id="q_email_or_first_name_or_last_name_or_username_or_mobile_number_cont"]').type('jstester4@qa.team');
  cy.get('button[type="submit"]').click();
  cy.get('td').should('contain.text', 'jstester4@qa.team');
  // cy.contains('td').should('have.text', 'reinhardttest@qa.team');
  cy.get('a[title="Edit"]').eq(1).click();
});

Cypress.Commands.add('LoginWithUI', () => {
  cy.viewport(1920, 1080);
  cy.visit(Cypress.env('endpoint'));
  cy.contains('Sign in').click();
  cy.get('input[type="email"]').type(Cypress.env('email'));
  cy.get('input[type="password"]').type(Cypress.env('password'));
  cy.get('button[type=submit]').click();
});

Cypress.Commands.add('LoginWithUIUns', () => {
  cy.viewport(1920, 1080);
  cy.visit(Cypress.env('endpoint'));
  cy.contains('Sign in').click();
  cy.get('input[type="email"]').type(Cypress.env('email'));
  cy.get('input[type="password"]').type('This is wrong');
  cy.get('button[type=submit]').click();
  cy.contains('div', /^Invalid login credentials./).should('be.visible');
});

Cypress.Commands.add('SetGoalsAfterAccountConfirmation', () => {
  cy.get('div').should('contain.text', 'Youth Development Organisation').eq(1).click();
  cy.wait(1000);
  cy.get('button[type="submit"]').click();
  cy.wait(1000);
  cy.contains('div', 'Study further').click({ force: true });
  cy.contains('div', 'Apply for jobs').click({ force: true });
  cy.get('button[type="submit"]').click();
  cy.wait(1000);
  cy.contains('div', 'Communication').click({ force: true });
  cy.contains('div', 'Conflict management').click({ force: true });
  cy.wait(1000);
  cy.get('button[type="submit"]').click();
  cy.wait(1000);
  cy.get('button[type="submit"]').click();
});
