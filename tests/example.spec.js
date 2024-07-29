// @ts-check
const { test, expect } = require('@playwright/test');
let page
test.beforeEach(async({browser})=>{
   page= await browser.newPage()
   page.goto("https://www.youtube.com/")
  const button= await page.locator("")
   await button.click({button:'right'})
   page.on('dialog',async dialog=>{

   }){
     
   })
})
test.afterEach(async()=>{
    
})
