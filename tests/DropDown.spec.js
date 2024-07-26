import {test,expect} from '@playwright/test'
test('Drop Down',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
   // await page.locator("//select[@id='country']").selectOption({label:'India'})//select by label
  // await page.locator("//select[@id='country']").selectOption('India')//select by visible text
   //await page.locator("//select[@id='country']").selectOption({Index:2})//select by Index
   //await page.locator("//select[@id='country']").selectOption({value:'india'})//select by value
   
   // const con=await page.locator("//select[@id='country']/option")//count number of options in a dropdown
    //await expect(con).toHaveCount(10)
    
   // const drop=await page.$$("//select[@id='country']/option")//count number of options in a dropdown
   // await expect(drop.length).toBe(10)
  //const content=await page.locator("//select[@id='country']").textContent()
   //await expect(await content.includes('India')).toBeTruthy()
   //select the dropdown option from the element
    const options=await page.$$("//select[@id='country']/option")
    for(const option of options){
            const value=await option.textContent()
            if(value.includes('India')){
                await page.selectOption("//select[@id='country']",value)
                break
            }
        }
})