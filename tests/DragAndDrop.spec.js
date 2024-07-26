import {test,expect} from '@playwright/test'
test('Drag and Drop',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const start= await page.locator("//*[@id='draggable']")
    const  stop=await page.locator("//*[@id='droppable']")

    //approch 1
    //    await start.hover()
    //    await page.mouse.down()
    //    await stop.hover()
    //    await page.mouse.up()
    //    await page.waitForTimeout(5000);

       //approch 2
      await start.dragTo(stop)
       await page.waitForTimeout(5000)
})