/// <reference types="cypress" />

beforeEach(() => {
    cy.LoginWithUI();
});

it('find no content in info hub', () => {
    //search for an invalid string and find no content
    cy.searchInfoHub("u245g4^%&*(F&G*YHBTY")
    cy.wait(2000);
    cy.contains("Eish, we can't find anything... ").should('be.visible');

});
