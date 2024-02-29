/// <reference types="cypress" />

beforeEach(() => {
    cy.LoginWithUI();
});

it('Search for article and click on it', () => {
    const validInfoSearchTerm = Cypress.env('validInfoSearchTerm');

    //search for an invalid string and find no content
    cy.searchInfoHub(validInfoSearchTerm);
    cy.wait(1000);
    cy.contains("Eish, we can't find anything... ").should('not.exist');

    //search for an item and validate that you land on a detail page when clicked
    cy.get('.min-h-0.px-6')
        .contains(validInfoSearchTerm)
        .click();  

    //like article check it was saved then unlike it
    cy.url().should('include', '/information-hub/articledetails/');
    cy.wait(1000);
    cy.get('.w-40 > .flex').click();
    cy.contains("Go back").click();
    cy.contains("Take me there").click();
    cy.get('.relative > :nth-child(1) > .w-full').should('be.visible');
    cy.get('.pt-3 > .flex').click();
    cy.get('.relative > :nth-child(1) > .w-full').should('not.exist');
});


