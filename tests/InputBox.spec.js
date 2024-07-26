import {test,expect} from '@playwright/test'
test('Input Box',async({page})=>{
await page.goto("https://demo.nopcommerce.com/register")
 await expect(await page.locator("//*[@id='FirstName']")).toBeVisible()
 await expect(await page.locator("//*[@id='FirstName']")).toBeEditable()
 await expect(await page.locator("//*[@id='FirstName']")).toBeEmpty()
  await page.locator("//*[@id='FirstName']").fill("seshu")
}
)


