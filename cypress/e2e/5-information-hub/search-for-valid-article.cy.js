/// <reference types="cypress" />

beforeEach(() => {
    cy.LoginWithUI();
});

it('find no content in info hub', () => {
    //search for an invalid string and find no content
    cy.searchInfoHub(Cypress.env('validInfoSearchTerm'));
    cy.wait(1000);
    cy.contains("Eish, we can't find anything... ").should('not.exist');

    //search for an item and validate that you land on a detail page when clicked
    cy.get('.min-h-0.px-6')
        .contains(Cypress.env('validInfoSearchTerm'))
        .click();  
        cy.url().should('include', '/information-hub/articledetails/');
});
