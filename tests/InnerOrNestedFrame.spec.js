import {test,expect} from '@playwright/test'
test('Inner Nested', async ({page})=>{
   await page.goto("https://ui.vision/demo/webtest/frames/")
  const frame3= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
  
  const Childframes= await frame3.childFrames()
  Childframes[0].locator("//span[contains(text(),'Hi, I am the UI.Vision IDE')]").click
  await page.waitForTimeout(5000)
})