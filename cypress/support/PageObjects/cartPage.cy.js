
class CartPage {
	// Locators
	proceedToCheckoutButton = 'Proceed To Checkout';
	cartTable = '#cart_info_table';
	itemCell = '.cart_menu .image';
	descriptionCell = '.cart_menu .description';
	priceCell = '.cart_menu .price';
	quantityCell = '.cart_menu .quantity';
	totalCell = '.cart_menu .total';
	productRow = (productId) => `#product-${productId}`;
	productName = (productId) => `#product-${productId} .cart_description h4 a`;
	productCategory = (productId) => `#product-${productId} .cart_description p`;
	productPrice = (productId) => `#product-${productId} .cart_price p`;
	productQuantity = (productId) => `#product-${productId} .cart_quantity button`;
	productTotal = (productId) => `#product-${productId} .cart_total_price`;
	productDeleteButton = (productId) => `#product-${productId} .cart_quantity_delete`;

	// Methods
	clickProceedToCheckout() {
		cy.contains(this.proceedToCheckoutButton).click();
	}

	getProductName(productId) {
		return cy.get(this.productName(productId));
	}

	getProductCategory(productId) {
		return cy.get(this.productCategory(productId));
	}

	getProductPrice(productId) {
		return cy.get(this.productPrice(productId));
	}

	getProductQuantity(productId) {
		return cy.get(this.productQuantity(productId));
	}

	getProductTotal(productId) {
		return cy.get(this.productTotal(productId));
	}

	deleteProduct(productId) {
		cy.get(this.productDeleteButton(productId)).click();
	}
}

export default new CartPage();
