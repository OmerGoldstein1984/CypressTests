
class CheckOutPage {
	// Locators
	breadcrumbs = '.breadcrumbs';
	deliveryAddressBox = '#address_delivery';
	billingAddressBox = '#address_invoice';
	addressTitle = '.address_title h3';
	addressName = '.address_firstname.address_lastname';
	addressCompany = '.address_address1.address_address2';
	addressCityStatePostcode = '.address_city.address_state_name.address_postcode';
	addressCountry = '.address_country_name';
	addressPhone = '.address_phone';
	cartTable = '#cart_info .table';
	cartProductRow = (productId) => `#product-${productId}`;
	cartProductName = (productId) => `#product-${productId} .cart_description h4 a`;
	cartProductCategory = (productId) => `#product-${productId} .cart_description p`;
	cartProductPrice = (productId) => `#product-${productId} .cart_price p`;
	cartProductQuantity = (productId) => `#product-${productId} .cart_quantity button`;
	cartProductTotal = (productId) => `#product-${productId} .cart_total_price`;
	cartTotalAmount = '#cart_info .cart_total_price:last';
	orderMessageTextarea = '#ordermsg textarea[name="message"]';
	placeOrderButton = 'a.check_out';

	// Methods
	getDeliveryAddress() {
		return cy.get(this.deliveryAddressBox);
	}
	getBillingAddress() {
		return cy.get(this.billingAddressBox);
	}
	getAddressDetail(boxSelector, detailSelector) {
		return cy.get(`${boxSelector} ${detailSelector}`);
	}
	getCartProductName(productId) {
		return cy.get(this.cartProductName(productId));
	}
	getCartProductCategory(productId) {
		return cy.get(this.cartProductCategory(productId));
	}
	getCartProductPrice(productId) {
		return cy.get(this.cartProductPrice(productId));
	}
	getCartProductQuantity(productId) {
		return cy.get(this.cartProductQuantity(productId));
	}
	getCartProductTotal(productId) {
		return cy.get(this.cartProductTotal(productId));
	}
	getCartTotalAmount() {
		return cy.get(this.cartTotalAmount);
	}
	enterOrderMessage(message) {
		cy.get(this.orderMessageTextarea).clear().type(message);
	}
	placeOrder() {
		cy.get(this.placeOrderButton).click();
	}
}

export default new CheckOutPage();
