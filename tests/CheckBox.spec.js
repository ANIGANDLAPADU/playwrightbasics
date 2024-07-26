import {test,expect} from '@playwright/test'
test('Check Box',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("//input[@id='sunday']").check()
    await expect(await page.locator("//input[@id='sunday']")).toBeChecked()
    await expect(await page.locator("//input[@id='sunday']").isChecked()).toBeTruthy()
    await expect(await page.locator("//input[@id='monday']").isChecked()).toBeFalsy()
    await page.waitForTimeout(5000)
    const elementLocators=["//input[@id='monday']","//input[@id='saturday']","//*[@id='wednesday']"]
    //elements to be checked 
    for(const element of elementLocators){
        await page.locator(element).check()
    }
    //elements to be unchecked
    for(const element of elementLocators){
        if(await page.locator(element).isChecked){
            await page.locator(element).uncheck()
        }
    }

})