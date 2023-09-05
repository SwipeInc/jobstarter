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

it('Confirm Sign Up Account', () => {
  cy.ConfirmSignUpAccount();
});

it('Confirm user sign up using CMS', () => {
  cy.ActivateUserCMS();
});

it('User is logged in', () => {
  cy.LoginWithUI();
  cy.SetGoalsAfterAccountConfirmation();
});
