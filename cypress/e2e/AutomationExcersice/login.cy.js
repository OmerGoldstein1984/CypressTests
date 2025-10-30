/// <reference types="cypress" />

describe('AutomationExcersice Login Tests', () => {
	before(function () {
	cy.fixture('user').then((data) => {
		this.user = data;
	});
	});
	it('visits login page with valid creds', () => {
		cy.visit('https://automationexercise.com/login');
		cy.get('[data-qa="login-button"]').should('exist');	
		cy.get('[data-qa="login-email"]').type(this.uer.user);
        cy.get('[data-qa="login-password"]').type(this.user.password);
        cy.get('[data-qa="login-button"]').click();
		cy.contains('Logout').should('exist');
	});
});
