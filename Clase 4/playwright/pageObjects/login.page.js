const { expect } = require("@playwright/test");
const ParentPage = require("./parentPage.page");

class LoginPage extends ParentPage{

    constructor(page) {
        super() //importante llamarlo para poder usar la herencia desde Parent page
        this.page = page;
    }

    get inputUser(){
        return this.page.locator('[name="email"]')
    }

    get inputPassword(){
        return this.page.locator ('[name="password"]')
    }

    get btnIngresar(){
        return this.page.locator ('.css-vpvbzj button')
    }

    get svgDashboardlogo(){
        return this.page.locator (".css-1kofo1f svg")
    }
    

    async login (user,password){

        await super.fillTextInput(this.inputUser,user)
        await super.fillTextInput(this.inputPassword,password)
        await super.clickElement(this.btnIngresar)



    }

    async positiveVerification(){
        await this.svgDashboardlogo.waitFor({state: "visible"})
        await expect (this.svgDashboardlogo).toBeVisible() 
    }
}


module.exports = LoginPage;