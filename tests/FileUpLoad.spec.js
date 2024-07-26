import {test,expect} from '@playwright/test'
test('File Upload',async({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    await page.waitForSelector("#filesToUpload")
    await page.locator("#filesToUpload")
    //upload a file or multiple files
   .setInputFiles(['tests/fileupload/English CHC.pdf'])
    await page.waitForTimeout(5000)
    await expect(await page.locator("//ul[@id='fileList']/li")).toHaveText
    await page.locator("#filesToUpload")
    //removing a file 
    .setInputFiles([])
    await page.waitForTimeout(5000)
})