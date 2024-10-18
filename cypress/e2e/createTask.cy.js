import DashboardPage from '../page objects/dashboard';
import LoginPage from '../page objects/loginPage';
describe('Dashboard Page Tests', () => {
    const dashboardPage = new DashboardPage(); 
    const loginPage = new LoginPage();
    
    it('should create a new folder', () => {
        
        loginPage.visit('/901204974637');
        loginPage.enterEmail('f.spasovski95@gmail.com');
        loginPage.enterPassword('Tester123#');
        loginPage.clickLoginButton();
        cy.wait(3000)

        cy.get('[data-test="simple-bar__spaces__true"]').contains('New Space From API V2').click();
        const folderName = 'My New Folder'; 
        dashboardPage.createNewFolder(folderName); 
        cy.contains(folderName).should('be.visible'); 
        
        cy.intercept('POST', '**/task', (req) => {
            req.continue((res) => {
                expect(res.statusCode).to.eq(200);
            });
        }).as('createTask');
        const taskName = 'My New Task';
        dashboardPage.addNewTask(taskName); 
        cy.wait(3000);
        cy.contains(taskName).should('be.visible'); 
        cy.wait('@createTask');
        
    });
});
