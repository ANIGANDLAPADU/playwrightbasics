import {test,expect} from '@playwright/test'


test.beforeEach(()=>{
   console.log('Before each')
})
test.afterEach(()=>{
    console.log('After each')
})
test.beforeAll(()=>{
    console.log('Before All')
})

test.afterAll(()=>{
    console.log('After All')
})

test.describe('Group 1',()=>{
   test('smoke',async({page})=>{
      console.log("i am from smoke")
   })
   test('smoke1',async({page})=>{
    console.log("i am from smoke")
 })
})

test.describe('Group 2',()=>{
    test('smoke',async({page})=>{
       console.log("i am from sanity")
    })
    test('smoke1',async({page})=>{
     console.log("i am from sanity")
  })
 })