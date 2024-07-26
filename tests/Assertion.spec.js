import {test,expect} from '@playwright/test'
test('Assertions',async({page})=>{
 await page.goto("https://demo.nopcommerce.com/register")
 //to check correct URL or not
 await expect(page).toHaveURL("https://demo.nopcommerce.com/register")
 //to check correct title of website
 await expect(page).toHaveTitle("nopCommerce demo store. Register")
 //to check correct attribue 
  const password=await page.locator("//input[@id='Password']")
  await expect(password).toHaveAttribute('type','password')
 //to check radio button 
 const radioButton=await page.locator("//input[@id='gender-male']")
 await expect(radioButton).toBeChecked
 //to check checkBox button
 const checkBox=await page.locator("//input[@type='checkbox']")
 await expect(checkBox).toBeChecked
 //to check matching Text
 await expect(await page.locator("//h1")).toHaveText("Register")
 //to check contains Text
 await expect(await page.locator("//h1")).toContainText('Reg')
 //to check text present or not
    const firstName= await page.locator("//*[@id='FirstName']")
    await firstName.fill("seshu")
    await expect(firstName).toHaveValue("seshu")
    //to count no elements presented in a List
    const dropDown=await page.locator("//select[@name='DateOfBirthMonth']/option")
    await expect(dropDown).toHaveCount(13)
    
 
})