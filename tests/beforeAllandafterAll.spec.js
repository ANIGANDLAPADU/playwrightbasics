import {test,expect} from '@playwright/test'
let page
test.beforeAll(async({browser})=>{
    page= await browser.newPage()
    await page.goto("https://www.demoblaze.com/index.html")
    await page.click("//*[@id='login2']")
    await page.fill("#loginusername",'pavanol')
    await page.fill("#loginpassword",'test@123')
    await page.click("//button[contains(text(),'Log in')]")
});
test.afterAll(async()=>{
    await page.waitForTimeout(5000)
    await page.click("//a[contains(text(),'Log out')]")
})
test('Log in',async()=>{
    
    const titles=await page.$$("//h4[@class='card-title']/a")
    for(const title of titles){
       const data=await title.textContent()
       console.log(data)
    }
    
})
test('Add Product to cart',async()=>{
     await page.click("//a[contains(text(),'Samsung galaxy s6')]")
     page.on('dialog', async(dialog)=>{
        expect(dialog.accept())
        expect(dialog.message()).toContain("Product added.")
      })
     await page.click("//a[contains(text(),'Add to cart')]")
    await page.waitForTimeout(5000)
})