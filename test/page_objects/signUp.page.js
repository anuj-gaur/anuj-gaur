class SignUpPage {

    constructor(){
        this.userEmail = 'shanu4567@gmail.com';
        this.pass = 'qwertyuiop';
        this.name = 'shanuss'
        this.surName = 'blah'
    }

    // get signOnButton () { return $("//a[contains(text(),'Sign in')]") }
    get createAccountHeader () { return $("//h1[contains(text(),'Create an account')]") }
    get username () { return $("//input[@id='email_create']") }
    get password () { return $("//input[@id='passwd']") }
    get submitBtn () { return $("//button[@id='SubmitCreate']") }
    get selectGender () { return $("//input[@id='id_gender1']") }
    get firstName () { return $("//input[@id='customer_firstname']") }
    get lastName () { return $("//input[@id='customer_lastname']") }
    get email () { return $("//input[@id='email']") }
    get days () { return $("//select[@id='days']") }
    get month () { return $("//select[@id='months']") }
    get year () { return $("//select[@id='years']") }
    get company () { return $("//input[@id='company']") }
    get address () { return $("//input[@id='address1']") }
    get city () { return $("//input[@id='city']") }
    get state () { return $("//select[@id='id_state']") }
    get postCode () { return $("//input[@id='postcode']") }
    get phn_number () { return $("//input[@id='phone_mobile']") }
    get alias () { return $("//input[@id='alias']") }
    get reg_bttn () { return $("//button[@id='submitAccount']") }
    get myAccountHeader () { return $("//h1[contains(text(),'My account')]") }


    async signup () {
        await this.username.setValue(this.userEmail);
        await browser.pause(1000);
        await this.submitBtn.click();
        await browser.pause(1000);
        await this.createAccountHeader.waitForDisplayed(3000);
        await this.selectGender.click();
        await browser.pause(1000);
        await this.firstName.setValue(this.name);
        await this.lastName.setValue(this.surName);
        await browser.pause(1000);
        await this.email.setValue(this.userEmail);
        await this.password.setValue(this.pass);
        await this.days.selectByIndex(4);
        await this.month.selectByIndex(4);
        await this.year.selectByIndex(27);
        await browser.pause(1000);
        await this.company.setValue('yoyotech');
        await this.address.setValue('town, city, state');
        await this.city.setValue('alaska');
        await this.state.selectByIndex(4);
        await this.postCode.setValue(30009);
        await this.phn_number.setValue(123456789);
        await this.alias.setValue('yoyo');
        await browser.pause(1000);
        await this.reg_bttn.click();
    }


}

export default new SignUpPage()