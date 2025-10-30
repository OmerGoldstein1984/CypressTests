Cypress.Commands.add('login', (email, password) => { 
    cy.visit('https://automationexercise.com/login');
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password);
    cy.get('[data-qa="login-button"]').click();
});
