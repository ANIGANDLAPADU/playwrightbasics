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

test('test5',async({page})=>{
    expect(1).toBe(1)
    test.fail()
    console.log('i am from test5')
})

test('test6',async({page})=>{
  //  test.slow()
  test.setTimeout(2000)
    console.log('i am from test5')
})