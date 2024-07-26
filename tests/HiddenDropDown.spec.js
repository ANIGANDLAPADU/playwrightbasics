import {test,expect} from '@playwright/test'
test('Hidden DropDown',async({page})=>{
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   await page.fill("//input[@placeholder='Username']",'Admin')
   await page.fill("//input[@placeholder='Password']",'admin123')
   await page.click("//button[@type='submit']")
   await page.click("//*[@id='app']/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a/span")
   await page.click("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[6]/div/div[2]/div/div")
    const elements=await page.$$("//div[@class='oxd-select-option']/span")
    for(const element of elements){
       const data=await element.textContent
       console.log(data)
    }

})