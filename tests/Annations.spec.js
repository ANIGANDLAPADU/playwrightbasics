import {test,expect, firefox} from '@playwright/test'

// test.only('test1',async({page})=>{
//     console.log('i am from test1')
// })

test('test2', async({page,browserName})=>{
    console.log('i am from test2')
    if(browserName==='chromium')
    {
        test.skip()
    }
})

test.skip('test3',async({page})=>{
    console.log('i am from test3')
})
test.fixme('test4',async({page})=>{
    console.log('i am from test4')
})