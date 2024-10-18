class DashboardPage {
    constructor() {
        this.plusIcon = '[data-test="project-row__ellipsis_icon-New Space From API V2"]';
       
        this.clickFolderIcon = '[data-test="dropdown-list-item__Folder"]';
        
        this.folderName = '[data-test="create-category__form-input"]';

        this.createFolderButton = 'button[cu3-type="primary"][cu3-size="medium"]';
        
        this.taskName = '[data-test="task-row-new__input"]';

        this.saveTask = '[data-test="task-row-new__button"]';

    }

    clickPlusIcon() {
        cy.wait(3000);
        cy.get(this.plusIcon).click();
    }

    
    selectFolderOption() {
        cy.get(this.clickFolderIcon).click();
    }

    
    enterFolderName(folderName) {
        cy.get(this.folderName).clear().type(folderName);
    }

    clickCreateFolder() {
        cy.get(this.createFolderButton).click();
    }

    enterTaskName(taskName) {
        cy.get(this.taskName).clear().type(taskName);
    }

    clickSaveTask() {
        cy.get(this.saveTask).click();
    }

    createNewFolder(folderName) {
        this.clickPlusIcon();             
        this.selectFolderOption();        
        this.enterFolderName(folderName); 
        this.clickCreateFolder();         
    }
    
    addNewTask(taskName) {
        this.enterTaskName(taskName);     
        this.clickSaveTask();             
    }
}

export default DashboardPage;