import {test,expect} from '@playwright/test'
test('Soft Assertion',async ({page})=>{
  await page.goto("https://demo.nopcommerce.com/register")
   await expect.soft(page).toHaveTitle('seshu')
})