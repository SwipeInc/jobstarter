/// <reference types="cypress" />

const path = require('path');

describe('Adding information to My Profile CV', () => {
  beforeEach(() => {
  });
  before(() => {});
});

it('Log in, create cv ,download cv and verifyu download', () => {
  cy.LoginWithUI();
  cy.AddInfoToCV();
  cy.DownloadCV();
  const downloadsFolder = Cypress.config('downloadsFolder');
  cy.readFile(path.join(downloadsFolder, 'cv.pdf')).should('exist');
});
