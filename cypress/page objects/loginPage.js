
class LoginPage {
    
    visit() {
      cy.visit('https://app.clickup.com/login');
    }
    
    getEmailInput() {
      return cy.get('input[type="email"]');
    }
  
    getPasswordInput() {
      return cy.get('input[type="password"]');
    }
  
    getLoginButton() {
      return cy.get('button[type="submit"]');
    }
  
    getErrorMessage() {
      return cy.get('.cu-form__error');  
    }
  
    enterEmail(email) {
      this.getEmailInput().clear().type(email);
    }
  
    enterPassword(password) {
      this.getPasswordInput().clear().type(password);
    }
  
    clickLoginButton() {
      this.getLoginButton().click();
    }
  
    assertSuccessfulLogin() {
      cy.url().should('include', '/90121672763');
    }
  }
  
  export default LoginPage;