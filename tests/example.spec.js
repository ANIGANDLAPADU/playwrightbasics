// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/")
   page.on('dialog',async(dialog)=>{
    expect(dialog.type()).toContain('alert')
    expect(dialog.message()).toContain('I am an alert box!')
   await dialog.accept()
   })
   await page.click("//*[@id='HTML9']/div[1]/button[1]")
   await page.waitForTimeout(5000)
});
