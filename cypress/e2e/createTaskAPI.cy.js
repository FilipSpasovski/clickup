import LoginPage from '../page objects/loginPage';
describe('Create a new ClickUp Space via API', () => {
  
  const apiUrl = 'https://api.clickup.com/api/v2';
  const teamId = Cypress.env('teamId');
  const apiKey = Cypress.env('clickupApiKey');
  let spaceid = '';
  let folderid = '';
  let listid = '';
  it.only('Create a task via API', () => {
    
    cy.request({
      method: 'POST',
      url: `${apiUrl}/team/${teamId}/space`,  
      headers: {
        Authorization: apiKey  
      },
      body: {
        "name": "Stefan API",
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
    }).then((space_response) => {
      
      expect(space_response.status).to.eq(200);
      expect(space_response.body).to.have.property('id'); 
      expect(space_response.body.name).to.eq('Stefan API');
      spaceid = space_response.body.id;
      cy.log(spaceid);

    
      cy.request({
        method: 'POST',
        url: `${apiUrl}/space/${spaceid}/folder`,  
        headers: {
          Authorization: apiKey  
        },
        body: {
          "name": "Api created folder",
        }
      }).then((folder_response) => {
        folderid = folder_response.body.id;
        expect(folder_response.status).to.eq(200);
        
        cy.request({
          method: 'POST',
          url: `${apiUrl}/folder/${folderid}/list`,  
          headers: {
            Authorization: apiKey  
          },
          body: {
            "name": "Api created list",
          }
        }).then((list_response) => {
          listid = list_response.body.id;
          expect(list_response.status).to.eq(200);
     
          cy.request({
            method: 'POST',
            url: `${apiUrl}/list/${listid}/task`,  
            headers: {
              Authorization: apiKey  
            },
            body: {
                "name": "API created Task",
                "description": "New Task Description",
                "assignees": [
                  183
                ],
                "tags": [
                  "tag name 1"
                ],
                "status": "To Do",
                "priority": 3,
                "due_date": 1508369194377,
                "due_date_time": false,
                "time_estimate": 8640000,
                "start_date": 1567780450202,
                "start_date_time": false,
                "notify_all": true,
                "parent": null,
                "links_to": null,
                "custom_fields": []
            }
          }).then((response) => {
            listid = response.body.id;
            expect(response.status).to.eq(200);
          });

    });

  });
 
  });

});


  

});