import {test,expect} from '@playwright/test'
test.skip('alert handling', async ({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/")


     page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await   dialog.accept()
      })
     await page.click("//button[normalize-space()='Alert']")
     await page.waitForTimeout(5000)
    })



    test.skip('Alert Dismiss',async ({page})=>{
          await page.goto("https://testautomationpractice.blogspot.com/")


           page.on('dialog', async dialog=>{
            expect(dialog.type()).toContain('confirm')
            expect(dialog.message()).toContain('Press a button!')
             
            await dialog.dismiss()
          })
          await page.click("//button[normalize-space()='Confirm Box']")
          await page.waitForTimeout(5000)
    })

    test('prompt alert',async ({page})=>{
      await page.goto("https://testautomationpractice.blogspot.com/")


       page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
         expect(dialog.defaultValue()).toContain("Harry Potter")
         await dialog.accept("seshu")
      })
      await page.click("//button[normalize-space()='Prompt']")
      await page.waitForTimeout(5000)
})
