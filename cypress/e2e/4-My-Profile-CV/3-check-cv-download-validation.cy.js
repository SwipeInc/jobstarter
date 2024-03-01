/// <reference types="cypress" />

const path = require('path');

describe('Login to site', () => {
  beforeEach(() => {
    cy.LoginWithUI();
  });

  it('Log in, create cv ,download cv and verify download', () => {

    cy.contains("My Profile/CV").click();
    cy.get('.opacity-100').click();


    //clear fields and check validation (need better way to target fields)
    cy.clearCVField(':nth-child(1) > .h-full > .flex-wrap > .min-h-0 > .flex > :nth-child(2)', 'Please add at least one Work Experience', true, false);
    cy.clearCVField('.mb-3 > .h-full > .flex-wrap > .justify-between > .flex', 'Please add at least one Skill', false, false);
    cy.clearCVField(':nth-child(2) > :nth-child(2) > .h-full > .h-auto > .min-h-0 > .w-full > :nth-child(2)', 'Please add at least one Education & Training', false, false);
    cy.clearCVField('#hook-form > div.w-full > .p-5', 'Please complete your Professional Statement', false, true);

    
  }); 
});

