import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.js'
import SecurePage from '../pageobjects/Dashboard.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await browser.pause(1000);

        await LoginPage.login();
        await browser.pause(1000)
        await expect(SecurePage.searchInput).toExist();
    })
})

// describe('Dashboard Testing', () => {
//     it('should should test the My Cases Table to make sure it is working properly', async () => {
//         await LoginPage.open();
//         await expect(LoginPage.inputUsername).toExist();

//         await LoginPage.login();
        
//     })
// })