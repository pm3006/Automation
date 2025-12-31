const { title } = require('node:process')
const {chromium} = require ('playwright')

async function runtest() {
    const browser  = await chromium.launch({headless:false})
    const page = await browser.newPage()

    await page.goto ('https://web.testing.onvopay.com/signin')
    await page.locator ('[name="email"]').fill('edward@onvopay.com')
    await page.locator ('[name="password"]').fill('0vejas.2015')
        await page.pause()
    await page.locator ('.css-vpvbzj button').click()

    const pagetext = await page.getByText ('ONVO Checkout').textContent()
    console.assert(pagetext === 'ONVO Checsskout', 'Page title incorrect')
    await browser.close()
}

runtest()

