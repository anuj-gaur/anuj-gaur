import { Given, When, Then } from '@cucumber/cucumber'
import LoginPage from '../page_objects/Login.page'
import signUpPage from '../page_objects/signUp.page'

Given(/^I'm on the login page$/,  async function(){
    await LoginPage.openBrowser();
});

When(/^I login with a registered user$/, async function(){
    await LoginPage.login(signUpPage.userEmail, signUpPage.pass);
});

Then(/^I shall be on the main page$/, async function(){
    await LoginPage.LoginVerification();
    await LoginPage.signOut();
    // await browser.closeWindow();
});