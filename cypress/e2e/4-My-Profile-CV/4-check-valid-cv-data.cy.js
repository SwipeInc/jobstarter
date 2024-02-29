/// <reference types="cypress" />

const path = require('path');

describe('Login to site', () => {
  beforeEach(() => {
    cy.LoginWithUI();
  });

  it('Log in, create cv ,download cv and verify download', () => {

    cy.contains("My Profile/CV").click();
    cy.get('.opacity-100').click();
    cy.contains("Edit").click();
    cy.get('.opacity-100').click();
    cy.wait(3000);
    
    cy.get(':nth-child(1) > .h-full > .flex > :nth-child(2) > .form-input').clear().type(111);
    cy.get('.h-full > .flex > .h-10').clear().type("!");
    cy.get(':nth-child(2) > .h-full > .flex-wrap > :nth-child(4) > .form-input').clear().type("test");
    cy.get('.h-full > .flex > .h-10').clear().type("!");


    cy.contains('Invalid phone number, check again').should('be.visible');
    cy.contains('Invalid address, check again').should('be.visible');
    cy.contains('Invalid ID number, check again').should('be.visible');
  }); 
});
