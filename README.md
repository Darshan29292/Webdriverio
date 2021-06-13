1) Clone the repository using git clone,this is Webdriverio with cucumber framework https://github.com/Darshan29292/Webdriverio.git
2) Open Visual Studio Code Ide and open the cloned project, which is downloaded from above link
3) Install all the dependencies using, npm i
4) Open the terminal.
5) To execute the feature file in the terminal, run the npm command,
npm run test
6) Once the test is executed, to generate and view the allure report, run the npm command 
npm run allure-reports

Configurations
To configure your tests, checkout the wdio.conf.js file in your test directory. It comes with a bunch of documented options you can choose from.

Environment-specific configurations
You can setup multiple configs for specific environments. Let's say you want to have a different baseUrl for your local and pre-deploy tests. Use the wdio.conf.js to set all general configs (like mochaOpts) that don't change. They act as default values. For each different environment you can create a new config with the 

