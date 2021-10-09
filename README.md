Hi, This is Anuj gaur.

I developed this framework- WebdriverIO-Cucumber to automate the scenarios provided in the test.
Please note that there is one feature file having 3 scenarios:
1. Register user.
2. Login to verify if user registered successfully.
3. Perform add a product into cart and payment operation.

Pre-requisites:
1. Make sure latest Node.js is installed in the machine.
2. Make sure JAVA HOME is available for allure reporter.
Please note that I have developed the suite in such a way that after the run the allure report would automatically generate and will be represented in chrome.

Also a '1' second buffer is provided after almost every step so that when the suite runs it'll be clearly visible of the functions getting performed over browser.

Steps to run:
1. After cloning into local, perform 'npm install'. 
<!-- it will install all the dependencies from package.json-->
2. Change Values in constructor of class:- test/page_objects/signUp.page.js
3. Run command - 'npm run test' within the console.

That's it!! it'll execute the suite and test cases and represent the report afterwards.

<!---
anuj-gaur/anuj-gaur is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
