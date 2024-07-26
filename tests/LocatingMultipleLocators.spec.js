const {test,expect} = require('@playwright/test')
test('MultipleLocators', async ({page})=>{
    await page.goto("https://www.demoblaze.com/index.html")
    //waitForSelector method is wait for some time to locate the element
    page.waitForSelector("//a") 
    //multiple webElements we will use $$
   const links = await page.$$('//a')
   for(const link of links){
    const linktext= await link.textContent()
    console.log(linktext)
  }
   page.close()
 });