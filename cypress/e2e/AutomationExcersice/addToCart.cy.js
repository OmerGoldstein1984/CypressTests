/// <reference types="cypress" />
import loginPage from '../../support/PageObjects/loginPage.cy.js';
import productPage from '../../support/PageObjects/productPage.cy.js';
import cartPageCy from '@pages/cartPage.cy.js';
describe('AutomationExcersice Add to Cart Tests', () => {
    let user;

    before(function () {
        cy.fixture('user').then((data) => {
            user = data;
        });
    });

    it('adds a product to the cart with cypress command', () => {
        cy.login(user.user, user.password); 
        cy.contains('.productinfo h2', 'Rs. 500')
        .closest('.productinfo')                 
        .find('.add-to-cart')                    
        .click();
         cy.contains('Continue Shopping').click(); 
         cy.contains('.productinfo h2', 'Rs. 700') 
        .closest('.productinfo')                   
        .find('.add-to-cart')                      
        .click();
        cy.contains('Continue Shopping').click(); 
   });

    it('adds a product to the cart with page object', () => {
         loginPage.login(user.user, user.password);

     productPage.addProductToCartByName('Rs. 500');
         productPage.closeCartModal();

     productPage.addProductToCartByName('Rs. 700');
         productPage.closeCartModal();
    
    productPage.viewCart();     
    });

});
