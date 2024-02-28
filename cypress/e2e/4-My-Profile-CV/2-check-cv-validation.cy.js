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

    //wait for page to load and clear all fields
    cy.wait(2000);
    cy.get('#hook-form > div.w-full > .p-5').clear();
    cy.get('input[placeholder="Phone"]').clear();
    cy.get('input[placeholder="First Name"]').clear(); 
    cy.get('input[placeholder="Last Name"]').clear();
    cy.get('input[placeholder="Date of birth"]').clear();
    cy.get('div[name="validSAId"] > .flex > :nth-child(1) > .form-checkbox').click();
    cy.get(':nth-child(11) > .w-full > .css-1s2u09g-control > .css-1wy0on6 > :nth-child(1)').click();

    // save form and validate all error messages are present
    cy.contains("Save").click();
    cy.contains("Invalid phone number, check again").should('be.visible');
    cy.contains("Invalid name, check again").should('be.visible');
    cy.contains("Invalid surname, check again").should('be.visible');
    cy.contains("Invalid ID number, check again").should('be.visible');
    cy.contains("Invalid date of birth, check again").should('be.visible');
    cy.contains("Invalid language, check again").should('be.visible');
  }); 

});

