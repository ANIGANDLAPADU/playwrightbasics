import {test,expect} from '@playwright/test'
test('BootStrap DropDown',async({page})=>{
    await page.goto("https://jquery-az.com/boots/demo.php?ex=63.0_2")
    await page.locator("//button[@type='button']").click()
    const options=await page.$$("//input[@type='checkbox']")
    for(const option of options){
           let value= await option.textContent()
           if(value.includes('Java')||value.includes('Python')){
            option.check()
            break;
           }
    }
})