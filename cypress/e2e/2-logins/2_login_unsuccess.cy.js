/// <reference types="cypress" />

// import { JSEndpoint } from '../../support/enums';

describe('Login with existing user', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });
  before(() => {});
});

it('User is logged in', () => {
  cy.LoginWithUIUns();
});
