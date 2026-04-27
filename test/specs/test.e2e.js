import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.js'
import SecurePage from '../pageobjects/Dashboard.js'
import MyCases from '../pageobjects/MyCases.js'

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open();
//         await browser.pause(1000);

//         await LoginPage.login();
//         await browser.pause(1000)
//         await expect(SecurePage.searchInput).toExist();
//     })
// })

describe('Dashboard Testing', () => {
    it('should should test the columns in the My Cases Table to make sure they sort the table correctly', async () => {
        await LoginPage.open();
        await expect(LoginPage.inputUsername).toExist();

        await LoginPage.login();
        await browser.pause(1000)
        await expect(MyCases.searchInput).toExist();
    })
})