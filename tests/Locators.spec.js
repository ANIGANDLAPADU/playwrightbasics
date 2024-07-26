import {test,expect} from '@playwright/test'

 test('Locators', async ({page})=>{
   await page.goto("https://www.demoblaze.com/index.html")
   //locating single webelement from a web page we will use locator
   await page.click("//a[@id='login2']")
  await page.locator("//input[@id='loginusername']").fill('pavanol')
  await page.fill("//*[@id='loginpassword']",'test@123')
  await page.click("//button[contains(text(),'Log in')]")
  const textdata= await page.locator("//a[contains(text(),'Welcome pavanol')]")
  await expect(textdata).toBeVisible
  page.close()
});