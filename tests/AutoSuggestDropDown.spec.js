import {test,expect} from '@playwright/test'
test('AutoSuggest', async ({page})=>{
    await page.goto('https://www.redbus.in/')
    await page.locator("//input[@id='src']").click
})