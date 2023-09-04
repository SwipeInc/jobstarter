/// <reference types="cypress" />

describe('Sign up a user', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });
  before(() => {});
});

it('Sign up a new user', () => {
  cy.SignUpWithUI();
});
