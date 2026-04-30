class ParentPage {
    
    async clickElement (element){
        await element.waitFor()
        await element.click()

    }

        async fillTextInput (element,text){
        await element.waitFor()
        await element.fill(text)

    }

        async waitForelementDisplayed (element){8
        await element.waitFor({state: "visible"})


    }






}
module.exports= ParentPage;