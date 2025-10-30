/// <reference types="cypress" />
describe('AutomationExcersice Add to Cart Tests', () => {
    before(function () {
        cy.fixture('user').then((data) => {
            this.user = data;
        });
	});
    it('adds a product to the cart', () => {
        cy.login(this.user.user, this.user.password); // Custom command to log in
        cy.contains('.productinfo h2', 'Rs. 500')           // Find the h2 with the specific text
        .closest('.productinfo')                          // Go up to the product container
        .find('.add-to-cart')                             // Find the specific Add to Cart button inside it
        .click();
         cy.contains('Continue Shopping').click(); // Close the modal by clicking 'Continue Shopping'
         cy.contains('.productinfo h2', 'Rs. 700')           // Find the h2 with the specific text
        .closest('.productinfo')                          // Go up to the product container
        .find('.add-to-cart')                             // Find the specific Add to Cart button inside it
        .click();
        cy.contains('Continue Shopping').click(); // Close the modal by clicking 'Continue Shopping'
   });     
});
