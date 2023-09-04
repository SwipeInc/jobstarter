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
  cy.get('input[name="email"]').type(Cypress.env('email'));
  cy.get('input[name="confirm_email"]').type(Cypress.env('email'));
  cy.get('input[id="first_name"]').type(Cypress.env('name'));
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
