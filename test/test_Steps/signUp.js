import { Given, When, Then } from '@cucumber/cucumber'
import LoginPage from '../page_objects/Login.page'
import SignUpPage from '../page_objects/signUp.page'


When(/^I want to register a new user$/, async function(){
    await SignUpPage.signup();
});

Then(/^I shall be able to sign up$/, async function(){
    await LoginPage.LoginVerification();
    await LoginPage.signOut();
    await browser.pause(2000);
    // await browser.closeWindow();
});