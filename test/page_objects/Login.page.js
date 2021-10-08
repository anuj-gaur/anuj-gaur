class LoginPage {

    constructor(){
        this.loginUrl = 'http://automationpractice.com/index.php'
        // this.userEmail = 'Anuj@gmail.com';
        // this.pass = 'qwertyuiop'
    }

    get signOnButton () { return $("//a[contains(text(),'Sign in')]") }
    get signInPageHeader1 () { return $("//h3[contains(text(),'Already registered?')]") }
    get signInPageHeader2 () { return $("//h3[contains(text(),'Create an account')]") }
    get username () { return $("//input[@id='email']") }
    get password () { return $("//input[@id='passwd']") }
    get submitBtn () { return $("//button[@id='SubmitLogin']") }
    get myAccountHeader () { return $("//h1[contains(text(),'My account')]") }
    get signOutBtn () { return $("//a[contains(text(),'Sign out')]") }

    async openBrowser () {
        await browser.url(this.loginUrl);
        await browser.maximizeWindow();
        browser.pause(1000);
        await this.signOnButton.click();
        await this.signInPageHeader1.waitForDisplayed(3000);
        await this.signInPageHeader2.waitForDisplayed(3000);
    }

    async login (user, passwrd) {
        await this.username.setValue(user);
        await browser.pause(1000);
        await this.password.setValue(passwrd);
        await browser.pause(1000);
        await this.submitBtn.click();
        await browser.pause(1000);
    }

    async LoginVerification () {
        await this.myAccountHeader.waitForDisplayed(3000)
        await browser.pause(2000);
    }

    async signOut () {
        await this.signOutBtn.click();
    }

}

export default new LoginPage()