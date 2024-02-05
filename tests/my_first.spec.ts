 import {test, expect} from '@playwright/test'  
 
 test.only('1st_test', async({page}) =>{
  
  await page.goto('https://www.google.com/');
  await page.locator("#APjFqb").fill('emin');
  await page.pause()
  await page.locator("#APjFqb").click()



    
    // await expect(page).toHaveTitle('Google')
    //  await page.pause()
   //  await page.click('id=APjFqb')
   //  await page.pause()
  
   //  await page.pause()
    // await expect.soft(page.locator('id=APjFqb')).toBeEmpty()
    // await expect(page).toHaveURL(/.*oogle/)

 } )

//  test('testOnlyAndpagePause',async ({page}) => {

//   await page.pause()
  
//  })