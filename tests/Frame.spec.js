import {test,expect} from '@playwright/test'
test('handling frames',async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    const Frame=page.frames()
    console.log(Frame.length)


    //approch 2
   //    const Frame1 = await page.frame({url :'https://ui.vision/demo/webtest/frames/frame_1.html'})
    //   await Frame1.fill("//input[@name='mytext1']",'seshu')
  //approch 3
 const Frame2= await page.frameLocator("//frame[@src='frame_1.html']").locator("//input[@name='mytext1']")
 await Frame2.fill("seshu")
})