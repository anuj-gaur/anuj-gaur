import { Given, When, Then } from '@cucumber/cucumber'
import LoginPage from '../page_objects/Login.page'
import signUpPage from '../page_objects/signUp.page';
import PaymentPage from '../page_objects/Payment.page'

When(/^I'm logged in$/,  async function(){
    await LoginPage.LoginVerification();
});

When(/^I add a product to the cart$/, async function(){
    await PaymentPage.addProduct();
});

Then(/^I should be able to perform successful payment$/, async function(){
    await PaymentPage.paymentConfirmation();
    await LoginPage.signOut();
    await browser.pause(2000);
});