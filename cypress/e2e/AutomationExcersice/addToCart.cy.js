/// <reference types="cypress" />
import loginPage from '../../support/PageObjects/loginPage.cy.js';
import productPage from '../../support/PageObjects/productPage.cy.js';
import cartPage from '../../support/PageObjects/cartPage.cy.js';
import checkOutPage from '../../support/PageObjects/checkOutPage.cy.js';

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

    it('adds a product to the cart with page object and validates cart/checkout', () => {
      loginPage.login(user.user, user.password);

      // Add products
      productPage.addProductToCartByName('Rs. 500');
      productPage.closeCartModal();
      productPage.addProductToCartByName('Rs. 700');
      productPage.closeCartModal();

      // Go to cart page (assume productPage.viewCart() navigates to cart)
      if (productPage.viewCart) {
        productPage.viewCart();
      } else {
        cy.visit('/view_cart'); // fallback if no method
      }

      // Validate both products exist in cart
      cartPage.getProductPrice(1).should('contain', 'Rs. 500');
      cartPage.getProductPrice(8).should('contain', 'Rs. 700');

      // Proceed to checkout
      cartPage.clickProceedToCheckout();

      // Validate order details on checkout page
      checkOutPage.getCartProductPrice(1).should('contain', 'Rs. 500');
      checkOutPage.getCartProductPrice(8).should('contain', 'Rs. 700');
      checkOutPage.getCartTotalAmount().should('contain', 'Rs. 1200');
    });
});
