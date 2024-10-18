# ClickUp

### Prerequisites 

* Download & Install [VS Code](https://code.visualstudio.com/download)
* Install Node.js [Node.js](https://nodejs.org/en/download/package-manager)


## Project setup

*Open the project in VS Code and open terminal*  
*Run* **npm init** 
* This command will initialize a project and create the package. json file * 

*Run* **npm install cypress --save-dev**
* This command will install Cypress * 

*Run* **npx cypress run**
* This command will run all tests*

*Run* **npx cypress open**
* This command will open the Cypress test runner UI*


### Points for improvement
* Use FakerJS in order to create randomized names and escape hardcoding values
* Track if any of the test fail and if yes do not execute the after()
* Refactor the code in order to improve it
* Have all values stored in config file and read them from there in the tests instead of hardcoding them in the tests
* Save the storage state on login in order to not log in each time as I am doing right now