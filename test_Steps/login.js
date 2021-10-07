import { Given, When, Then } from '@cucumber/cucumber'


Given(/^I'm on the login page$/,  function(){
    browser.url("http://automationpractice.com/index.php");
    browser.maximizeWindow();
    browser.pause(10000)
});

When(/^I login with a default user$/, async function(){
    // browser.$("//a[contains(text(),'Sign in')]").waitForExist(4000);
    await browser.$("//a[contains(text(),'Sign in')]").click();
    await browser.$("//h3[contains(text(),'Already registered?')]").waitForDisplayed(4000);
    await browser.$("//input[@id='email']").setValue("Anuj@gmail.com")
    await browser.pause(3000)
    await browser.$("//input[@id='passwd']").setValue("qwertyuiop")
    await browser.pause(3000)
    await browser.$("//button[@id='SubmitLogin']").click()
    await browser.pause(3000)
});

Then(/^I shall be on the main page$/, async function(){
    await browser.$("//h1[contains(text(),'My account')]").waitForDisplayed(4000);
    await browser.$("//a[contains(text(),'Sign out')]").click();
    await browser.pause(2000)
});