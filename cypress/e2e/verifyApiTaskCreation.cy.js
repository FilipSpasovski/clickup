import DashboardPage from '../page objects/dashboard';
import LoginPage from '../page objects/loginPage';

describe('Data creation and deletion', () => {

  const apiUrl = 'https://api.clickup.com/api/v2/team/';
  const teamId = Cypress.env('teamId');
  const apiKey = Cypress.env('clickupApiKey');


  it('Verify that task is succesfully created', () => {

    const loginPage = new LoginPage();
  
      loginPage.visit();
      loginPage.enterEmail('f.spasovski95@gmail.com');
      loginPage.enterPassword('Tester123#');
      loginPage.clickLoginButton();
      cy.wait(2000);
    cy.get('[data-test="simple-bar__spaces__true"]').contains('API created task').click();
    cy.get('[data-test="simple-bar__spaces__true"]').contains('Api created folder').click();
    cy.get('[data-test="sidebar-flat-tree__item-name-Api created list"]', {timeout: 60000}).click();
    });

    after(() => {
      
      cy.request({
        method: 'GET',
        url: `${apiUrl}${teamId}/space`,
        headers: {
          Authorization: apiKey
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(JSON.stringify(response.body));
        expect(response.body.spaces).to.be.an('array'); 
        expect(response.body.spaces.length).to.be.greaterThan(0);

        response.body.spaces.forEach((space) => {
          cy.log(`Space ID: ${space.id}`);
          const spaceId = space.id;
          cy.request({
            method: 'DELETE',
            url: `https://api.clickup.com/api/v2/space/${spaceId}`, 
            headers: {
              Authorization: apiKey
            }
          }).then((deleteResponse) => {
            expect(deleteResponse.status).to.eq(200);
            cy.log(`Successfully deleted Space ID: ${spaceId}`);
          });
           
          });
      });

  });

  });