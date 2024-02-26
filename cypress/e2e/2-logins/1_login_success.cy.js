/// <reference types="cypress" />

// import { JSEndpoint } from '../../support/enums';

describe('Login with existing user', () => {
  beforeEach(() => {
  });
  before(() => {});
});

it('User is logged in', () => {
  cy.LoginWithUI();
  cy.url().should('include', 'candidate-hub/wall');
});
