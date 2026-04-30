const { test, expect} = require ('@playwright/test');
const {USERpositive, PASSWORDpositive} = process.env;
const LoginPage = require('../pageObjects/login.page')
const HomePage= require('../pageObjects/dashboardHome.page')    



test.describe ('Login', ()=>{
test.beforeEach(async ({page}) =>{
await page.goto ('')



})
test.only ('Positive Login', async ({page}) =>{
    await page.pause()
    const loginPage= new LoginPage(page)
    const homePage= new HomePage(page)
    await loginPage.login(USERpositive, PASSWORDpositive)
    await homePage.positiveVerification()
    await page.waitForTimeout(4000)
    await page.pause()

    const OnvoChockoutText = page.getByText('ONVO Checkout')
    // await pagelogo.waitFor({state: "visible"})
    // await expect (pagelogo).toBeVisible() 
    await expect(OnvoChockoutText).toContainText('ONVO Checkout')

    //const OnvoChockoutText = page.getByText ('ONVO Checkout').textContent()
    //await expect (OnvoChockoutText).textContent('ONVO Checkout') 
      await page.pause()
    
    //const pagetext = await page.getByText ('ONVO Checkout').textContent()
    //console.assert(pagetext === 'ONVO Checsskout', 'Page title incorrect')



})

test ('Negative Login', async ({page}) =>{


    const loginPage= new LoginPage(page)
    await loginPage.login(USERpositive, "0vejas.2016")
    await page.pause()
    await page.locator ('.css-vpvbzj button').click()
    await page.waitForTimeout(4000)
    await page.pause()
    const pagelogo = page.locator (".css-1kofo1f svg")
    const errorbanner = page.locator('[data-testid="error-message-password"]')
    await expect (pagelogo).not.toBeVisible() 
    await expect(errorbanner).toBeVisible()



      await page.pause()




})

})