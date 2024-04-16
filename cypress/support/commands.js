require('cypress-xpath');
import customSelectors from '..//support//customSelectors';

var moment = require('moment'); // require

const cs = new customSelectors();

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('SignUpWithUI', () => {
  cy.visit(Cypress.env('endpoint'));
  cy.contains('Sign Up').click();
  cy.get('input[name="email"]').type(Cypress.env('email'));
  cy.get('input[name="confirm_email"]').type(Cypress.env('email'));
  cy.get('input[id="first_name"]').type(Cypress.env('name'));
  cy.contains('Continue').click();
  cy.get('input[placeholder="Add a password"]').type(Cypress.env('password'));
  cy.get('input[placeholder="Confirm password"]').type(Cypress.env('password'));
  cy.contains('Sign up').click();
  cy.contains('div', /^Check your email/).should('be.visible');
});

Cypress.Commands.add('ConfirmSignUpAccount', () => {
  cy.visit('https://qa.team/');
  cy.get('input[type="text"]').type('reinhardttest');
  // cy.get('input[name="email"]').type(Cypress.env('email'));
  cy.get('input[type="submit"]').click();
  cy.get('div[class="pull-left caret"]').click();

  // cy.get('.pre')
  //   .invoke('text')
  //   .then((emailText) => {
  //     // Do something with the extracted text, e.g., assert or log it
  //     cy.log('Extracted Email Body:', emailText);
  //   });
});

Cypress.Commands.add('ActivateUserCMS', () => {
  cy.visit(Cypress.env('cmsEndpoint'));
  cy.get('input[id="admin_user_email"]').type(Cypress.env('cmsUsername'));
  cy.get('input[name="admin_user[password]"]').type(Cypress.env('cmsPassword'));
  cy.get('input[type="submit"]').click();
  cy.contains('Candidates').click();
  cy.get('a[href="/candidates"]').click();
  cy.get('input[id="q_email_or_first_name_or_last_name_or_username_or_mobile_number_cont"]').type(Cypress.env('email'));
  cy.get('button[type="submit"]').click();
  cy.get('td').should('contain.text', Cypress.env('email'));
  cy.get('a[title="Edit"]').eq(1).click();
});

Cypress.Commands.add('LoginWithUI', () => {
  cy.visit(Cypress.env('endpoint'));
  cy.contains('Sign in').click();
  cy.get('input[type="email"]').type(Cypress.env('email'));
  cy.get('input[type="password"]').type(Cypress.env('password'));
  cy.get('button[type=submit]').click();
});

Cypress.Commands.add('LoginWithUIUns', () => {
  cy.visit(Cypress.env('endpoint'));
  cy.contains('Sign in').click();
  cy.get('input[type="email"]').type(Cypress.env('email'));
  cy.get('input[type="password"]').type('This is wrong');
  cy.get('button[type=submit]').click();
  cy.contains('div', /^Invalid login credentials./).should('be.visible');
});

Cypress.Commands.add('SetGoalsAfterAccountConfirmation', () => {
  cy.get('div').should('contain.text', 'Youth Development Organisation').eq(1).click();
  cy.wait(1000);
  cy.get('button[type="submit"]').click();
  cy.wait(1000);
  cy.contains('div', 'Study further').click({ force: true });
  cy.contains('div', 'Apply for jobs').click({ force: true });
  cy.get('button[type="submit"]').click();
  cy.wait(1000);
  cy.contains('div', 'Communication').click({ force: true });
  cy.contains('div', 'Conflict management').click({ force: true });
  cy.wait(1000);
  cy.get('button[type="submit"]').click();
  cy.wait(1000);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('AddInfoToCV', () => {
  //click on My Profile/CV
  cy.contains('div', 'My Profile/CV').click();

  //get rid of the assistant character
  cy.get('div[class="absolute bottom-0 left-0 md:ml-8 min-h-0 min-w-0 max-h-screen max-w-screen-xl"]')
    .should('exist')
    .then(($button) => {
      if ($button.length > 0) {
        // The button exists, so click it
        cy.contains('div', 'Dismiss').click();
      }
    });

  //click edit button on CV
  cy.contains('button', 'Edit').click();

  //get rid of the assistant character
  cy.get('div[class="absolute bottom-0 left-0 md:ml-8 min-h-0 min-w-0 max-h-screen max-w-screen-xl"]')
    .should('exist')
    .then(($button) => {
      if ($button.length > 0) {
        // The button exists, so click it
        cy.contains('div', 'No thanks').click();
      }
    });

  //enter a professional statement
  cy.get('textarea[name="statement"]').type(Cypress.env('cvStatement'));

  //enter mobile number
  cy.get('input[name="mobile_number"]').type(Cypress.env('mobile_number'));

  //Add a soft skill
  cy.contains('div', 'Add a soft skill').click();
  cy.xpath(cs.typeSkillClick).eq(0).click();
  cy.xpath(cs.typeSkill).type('Active listening', { force: true });
  cy.contains('div', 'Active listening').click();
  cy.contains('button[type="submit"]', 'Add').click();

  //add a hard skill
  cy.contains('div', 'Add a hard skill').click();
  cy.xpath(cs.typeSkillClick).eq(0).click();
  cy.xpath(cs.typeSkill).type('Woodwork', { force: true });
  cy.contains('div', 'Woodwork').click();
  cy.contains('button[type="submit"]', 'Add').click();

  //add 1 basic edication
  cy.contains('div', 'Add basic education').click();
  cy.xpath(cs.typeHighSchool).click().type('Beacon Hill');
  cy.contains('div', 'Beacon Hill Secondary School').click({ force: true });
  cy.xpath(cs.typeQualification).click();
  cy.xpath(cs.selectQualli).click({ force: true });

  //enter date for basic education
  cy.contains('div', 'Year completed').click();
  cy.xpath(cs.year1970).click({ force: true });
  cy.contains('button[type="submit"]', 'Add').click();

  //adding a short course
  cy.xpath(cs.addShortCourse).click();
  cy.get('input[name="institution_name"]').type(Cypress.env('institutionName'));
  cy.get('input[name="course_name"]').type(Cypress.env('spell'));
  cy.get('input[name="start_date"]').type('2022-05-07');
  cy.contains('button[type="submit"]', 'Add').click();

  //add interest
  cy.xpath(cs.addInterest).click();
  cy.get('textarea[placeholder="I like playing tennis"]').type(Cypress.env('interest'));
  cy.contains('button[type="submit"]', 'Add').click();

  //add achievements
  cy.xpath(cs.addAchievements).click();
  cy.get('textarea[placeholder="Class Representative in Grade 8."]').type(Cypress.env('achievement'));
  cy.contains('button[type="submit"]', 'Add').click();

  //add work experience
  cy.xpath(cs.addWorkExperience).click();
  cy.get("input[name='institution']").type(Cypress.env('WECompany'));
  cy.get("input[name='position']").type(Cypress.env('WECompany'));
  cy.get('input[name="start_date"]').type('2017-11-07');
  cy.get('textarea[placeholder="Write your job description here"]').type(Cypress.env('WEJobDescription'));
  cy.contains('button[type="submit"]', 'Add').click();

  //add reference
  cy.xpath(cs.addReference).click();
  cy.get("input[name='name']").type(Cypress.env('refName'));
  cy.get("input[name='company']").type(Cypress.env('refCompany'));
  cy.get("input[name='number']").type(Cypress.env('refNumber'));
  cy.get("input[name='email_address']").type(Cypress.env('refEmail'));
  cy.contains('button[type="submit"]', 'Add').click();

  //select YDO
  cy.xpath(cs.selectYDO).click();
  cy.xpath(cs.selectArmy).click();

  //enter address
  cy.get('input[name="address_line_1"]').type(Cypress.env('address_line_1'));
  cy.wait(1500);
  cy.xpath(cs.addressSelect).click();

  //select a language
  cy.xpath(cs.languageSelect).eq(0).click();
  cy.xpath(cs.selectEnglish).click();

  //Select a gender
  cy.xpath(cs.genderSelect).eq(0).click();
  cy.xpath(cs.selectFemale).click();

  //Select a race
  cy.xpath(cs.raceSelect).eq(0).click();
  cy.xpath(cs.selectAfrican).click();

  //save CV
  cy.contains('div', 'Save').click();

  //refresh the page
  cy.reload();

  cy.wait(5000);
});

Cypress.Commands.add('DownloadCV', () => {
  cy.xpath(cs.downloadCV1).last().click();
});

Cypress.Commands.add('clearCVField', (selector, errorMessage, helperVisible, ifClear) => {
  cy.contains('Edit').click();
  if (helperVisible) {
    cy.get('.opacity-100').click();
    cy.wait(2000);
  }
  if (ifClear) {
    cy.get(selector).clear();
  } else {
    cy.get(selector).click();
  }

  cy.contains('Save').click();
  cy.wait(2000);
  cy.contains('Download CV').click();
  cy.contains(`${errorMessage} in your Profile to download the CV`).should('be.visible');
});

Cypress.Commands.add('searchInfoHub', (searchValue) => {
  // must be logged in
  cy.contains('Information Hub').click();
  cy.get('.opacity-100').click(); // clear popup
  cy.get('input[name="search"]').type(searchValue);
  cy.get('.mx-10 > .flex').click();
});
