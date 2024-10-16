import LoginPage from '../page objects/loginPage';
describe('Create a new ClickUp Space via API', () => {
  
  const apiUrl = 'https://api.clickup.com/api/v2/team/';
  const teamId = Cypress.env('teamId');
  const apiKey = Cypress.env('clickupApiKey');

  it('should create a new space in ClickUp', () => {
    cy.request({
      method: 'POST',
      url: `${apiUrl}${teamId}/space`,  
      headers: {
        Authorization: apiKey  
      },
      body: {
        "name": "New Space From API V2",
        "multiple_assignees": true,
        "features": {
          "due_dates": {
            "enabled": true,
            "start_date": false,
            "remap_due_dates": true,
            "remap_closed_due_date": false
          },
          "time_tracking": {
            "enabled": false
          },
          "tags": {
            "enabled": true
          },
          "time_estimates": {
            "enabled": true
          },
          "checklists": {
            "enabled": true
          },
          "custom_fields": {
            "enabled": true
          },
          "remap_dependencies": {
            "enabled": true
          },
          "dependency_warning": {
            "enabled": true
          },
          "portfolios": {
            "enabled": true
          }
        }
      }
    }).then((response) => {
      
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id'); 
      expect(response.body.name).to.eq('New Space From API V2');
    });
  });

  it('login and verify that the space is created succesfully', () =>{
    const loginPage = new LoginPage();

    loginPage.visit();
    loginPage.enterEmail('f.spasovski95@gmail.com');
    loginPage.enterPassword('Tester123#');
    loginPage.clickLoginButton();
    cy.wait(2000);
    
    loginPage.assertSuccessfulLogin();

    cy.get('[data-test="simple-bar__spaces__true"]')  
    .should('be.visible') 
    .contains('New Space From API V2') 
    .should('be.visible'); 
  });
});