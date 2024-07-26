import {test,expect} from '@playwright/test'
test('Key Board',async({page})=>{
    await page.goto("https://gotranscript.com/text-compare")
    await page.fill("//textarea[@name='text1']",'seshubabu')
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Control+v')
    await page.waitForTimeout(5000)
})