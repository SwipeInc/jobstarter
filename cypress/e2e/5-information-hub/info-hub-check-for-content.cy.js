/// <reference types="cypress" />

    beforeEach(() => {
        cy.LoginWithUI();
    });
  
    it('check for content in info hub', () => {
        cy.contains('Information Hub').click();
        cy.get('.opacity-100').click(); // clear popup

        //view all articles then confirm that there are at least 4 available
        cy.contains('View all articles').click();
        cy.get(':nth-child(5) > .min-h-0 > .relative > :nth-child(1) > .w-full').should('be.visible');
    });
  