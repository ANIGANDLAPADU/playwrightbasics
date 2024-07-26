import {test,expect} from '@playwright/test'
test('Right click',async({page})=>{
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")
    const rigthClick =await page.locator("//span[contains(text(),'right click me')]")

    //right click
    await rigthClick.click({rigthClick: 'right'});
    await page.waitForTimeout(5000)
})