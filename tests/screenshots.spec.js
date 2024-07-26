import {test,expect} from '@playwright/test'
import { time } from 'console'
test('Screen Shoot',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
await  page.screenshot({ path:'tests/screenshots/'+Date.now()+'homepage.png'})
})

test('Screen Shoot for complete',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await  page.screenshot({ path:'tests/screenshots/'+Date.now()+'fullpage.png',fullPage : true})
})