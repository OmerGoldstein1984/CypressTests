
class LoginPage {
  // Locators
  loginEmailInput = '[data-qa="login-email"]';
  loginPasswordInput = '[data-qa="login-password"]';
  loginButton = '[data-qa="login-button"]';
  loginUrl = 'https://automationexercise.com/login';

  visit() {
    cy.visit(this.loginUrl);
  }

  fillUsername(username) {
    cy.get(this.loginEmailInput).type(username);
  }

  fillPassword(password) {
    cy.get(this.loginPasswordInput).type(password);
  }

  submit() {
    cy.get(this.loginButton).click();
  }

  login(username, password) {
    this.visit();
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();
  }
}

export default new LoginPage();