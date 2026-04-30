const { expect } = require("@playwright/test");
const ParentPage = require("./parentPage.page");

class HomePage extends ParentPage {

    constructor(page) {
        super()
        this.page = page;
        
    }

   
    get svgDashboardlogo(){
        return this.page.locator (".css-1kofo1f svg")
    }
    


    async positiveVerification(){
        //await this.svgDashboardlogo.waitFor({state: "visible"})
        await super.waitForelementDisplayed(this.svgDashboardlogo)
        await expect (this.svgDashboardlogo).toBeVisible() 
    }
}


module.exports = HomePage;