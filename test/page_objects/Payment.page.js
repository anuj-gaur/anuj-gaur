class PaymentPage {

    constructor(){
        this.userEmail = 'shanu1234@gmail.com';
        this.pass = 'qwertyuiop';
        this.name = 'shanu'
        this.surName = 'blah'
    }

    get tShirts () { return $("//header/div[3]/div[1]/div[1]/div[6]/ul[1]/li[3]/a[1]") }
    get product1 () { return $("//a[contains(text(),'Faded Short Sleeve T-shirts')]") }
    get addToCart () { return $("//span[contains(text(),'Add to cart')]") }
    get productAdded () { return $("//span[contains(text(),'There is 1 item in your cart.')]") }
    get proceedToCheckout () { return $("//*[contains(text(),'Proceed to checkout')]") }
    get cartHeader () { return $("//h1[@id='cart_title']") }
    get proceedToCheckout1 () { return $("//body/div[@id='page']/div[2]/div[1]/div[3]/div[1]/p[2]/a[1]") }
    get adressHeader1 () { return $("//h3[contains(text(),'Your delivery address')]") }
    get adressHeader2 () { return $("//h3[contains(text(),'Your billing address')]") }
    get proceedToCheckout2 () { return $("//body/div[@id='page']/div[2]/div[1]/div[3]/div[1]/form[1]/p[1]/button[1]") }
    get shippingHeader () { return $("//h1[contains(text(),'Shipping')]") }
    get checkbox () { return $("//input[@id='cgv']") }
    get proceedToCheckout3 () { return $("//body/div[@id='page']/div[2]/div[1]/div[3]/div[1]/div[1]/form[1]/p[1]/button[1]") }
    get paymentPageHeader () { return $("//h1[contains(text(),'Please choose your payment method')]") }
    get productPrice () { return $("//span[@id='product_price_1_1_580364']") }
    get clickPay () { return $("//*[contains(text(),'Pay by bank wire')]") }
    get confirmOrder () { return $("//*[contains(text(),'I confirm my order')]") }
    get orderConfirmation () { return $("//strong[contains(text(),'Your order on My Store is complete.')]") }


    async addProduct () {
        await this.tShirts.click();
        await browser.pause(1000);
        await this.product1.waitForDisplayed(3000);
        await this.product1.click();
        await this.addToCart.waitForDisplayed(5000);
        await this.addToCart.click();
        await this.productAdded.waitForDisplayed(3000);
        await browser.pause(1000);
        await this.proceedToCheckout.click();
        await this.cartHeader.waitForDisplayed(3000);
        await browser.pause(1000);
    }

    async paymentConfirmation (){
        await this.proceedToCheckout1.click();
        await this.adressHeader1.waitForDisplayed(3000);
        await this.adressHeader2.waitForDisplayed(3000);
        await browser.pause(1000);
        await this.proceedToCheckout2.click();
        await this.shippingHeader.waitForDisplayed(3000);
        await browser.pause(1000);
        await this.checkbox.click();
        await this.proceedToCheckout3.click();
        await this.paymentPageHeader.waitForDisplayed(3000);
        await browser.pause(1000);
        await this.product1.waitForDisplayed(3000);
        await this.productPrice.waitForDisplayed(3000);
        await this.clickPay.click();
        await this.confirmOrder.waitForDisplayed(3000);
        await this.confirmOrder.click();
        await this.orderConfirmation.waitForDisplayed(3000);
        await browser.pause(1000);
    }


}

export default new PaymentPage()