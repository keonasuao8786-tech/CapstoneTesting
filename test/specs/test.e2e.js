import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.js'
import SecurePage from '../pageobjects/Dashboard.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await browser.pause(1000);

        await LoginPage.login();
        await expect(SecurePage.primaryText).toHaveText(['MTECH-QA']);
    })
})

