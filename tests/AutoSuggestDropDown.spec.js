import {test,expect} from '@playwright/test'
test('AutoSuggest', async ({page})=>{
 
    await page.goto('https://www.google.co.in/')
     page.fill("//textarea[@class='gLFyf']",'seshu')
     const drops= await page.$$('//div[@class="wM6W7d"]/span')
     for(const drop of drops){
        test.slow()
       const data= await drop.innerText
       console.log(data)
     }
     await page.waitForTimeout(5000)
})