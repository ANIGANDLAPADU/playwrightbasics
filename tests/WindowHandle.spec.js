import {test,expect,chromium} from '@playwright/test'

test('windows handles',async()=>{
   const browser= await chromium.launch()
   const  context= await browser.newContext()
   const  page= await context.newPage()
   await page.goto("https://unifiedportal-mem.epfindia.gov.in/memberinterface/")
  await page.waitForTimeout(2000)
  const  page1= await context.newPage()
   await page1.goto("https://enterprise.greythr.com/uas/portal/auth/login")
   const pages=context.pages()
   console.log(pages.length)
})

test.only('windows/handles',async()=>{
    const browser= await chromium.launch()
    const  context= await browser.newContext()
    const  page1= await context.newPage()
    test.slow()
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const pagePromise= context.waitForEvent('page')
    page1.locator("//a[contains(text(),'OrangeHRM, Inc')]").click()

  const newPage =await pagePromise;
   await page1.waitForTimeout(5000)
 })