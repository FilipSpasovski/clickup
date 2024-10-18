import DashboardPage from '../page objects/dashboard';
import LoginPage from '../page objects/loginPage';


it.only('Verify that task is succesfully created', () => {

    const loginPage = new LoginPage();
  
      loginPage.visit();
      loginPage.enterEmail('f.spasovski95@gmail.com');
      loginPage.enterPassword('Tester123#');
      loginPage.clickLoginButton();
      cy.wait(2000);
      
    //   loginPage.assertSuccessfulLogin();
    
    
    //cy.get('[data-test="sidebar-flat-tree__item"]').contains('API created Task').should('be.visible');
    
    //  const Apitaskname = 'API created Task';
    //  cy.contains(Apitaskname).should('be.visible');  
    //cy.contains('cu-subcatagory-row', 'API created list').should('be.visible');
    //cy.get('[data-test="sidebar-flat-tree__item-name-Api created list"]').contains('API created task').click().should('be.visible');
    //cy.get('[data-test^="sidebar-flat-tree__item-name"]').contains('API created task').click().should('be.visible');

    cy.get('[data-test="simple-bar__spaces__true"]').contains('Stefan API').click();
    cy.get('[data-test="simple-bar__spaces__true"]').contains('Api created folder').click();
    cy.get('[data-test="sidebar-flat-tree__item-name-Api created list"]', {timeout: 60000}).click();
    })