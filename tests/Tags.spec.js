import {test,expect} from '@playwright/test'
//npx playwright test Tags.spec.js --grep sanity --project chromium *when we want to execute only sanity testcases
// npx playwright test Tags.spec.js --grep sanity  --grep-invert regression --project chromium *when we want to execute only sanity but not regression testcases
test('test1@sanity',async({page})=>{
    console.log(' i am from test1')
})
test('test2@regression',async({page})=>{
    console.log(' i am from test2')
})
test('test3@sanity',async({page})=>{
    console.log(' i am from test3')
})
test('test4@regression',async({page})=>{
    console.log(' i am from test4')
})
test('test5@regression@sanity',async({page})=>{
    console.log(' i am from test5')
})