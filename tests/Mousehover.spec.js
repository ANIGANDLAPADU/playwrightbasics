import {test,expect} from '@playwright/test'
test('Web Table',async({page})=>{
     await page.goto("https://www.amazon.in/")
     await page.locator("//*[@id='nav-link-amazonprime']").hover()
    await page.waitForTimeout(5000)
})