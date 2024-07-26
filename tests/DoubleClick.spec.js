import {test,expect} from '@playwright/test'
test('Double click',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("//*[@id='HTML10']/div[1]/button").dblclick()
    await page.waitForTimeout(5000)
})