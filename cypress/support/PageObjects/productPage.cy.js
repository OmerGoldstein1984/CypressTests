class ProductPage {
  productInfoHeader = '.productinfo h2';
  productInfoContainer = '.productinfo';
  addToCartButton = '.add-to-cart';
  continueShoppingButton = 'Continue Shopping';
  ViewCartButtonText = 'Cart';

  addProductToCartByName(name) {
    cy.contains(this.productInfoHeader, name)
      .closest(this.productInfoContainer)
      .find(this.addToCartButton)
      .click();
  }

  closeCartModal() {
    cy.contains(this.continueShoppingButton).click();
  }

  viewCart() {
    cy.contains(this.ViewCartButtonText).click();
  }
}

export default new ProductPage();