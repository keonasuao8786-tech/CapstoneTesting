import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.js'
import SecurePage from '../pageobjects/Dashboard.js'
import MyCases from '../pageobjects/MyCases.js'

describe('Dashboard Testing', () => {
    it('should should test the columns in the My Cases Table to make sure they sort the table correctly', async () => {
        await LoginPage.open();
        await expect(LoginPage.inputUsername).toExist();

        await LoginPage.login();
        await browser.pause(1000)
        await expect(MyCases.searchInput).toExist();

        await MyCases.nameColumn.click();
        await expect(MyCases.columnOrderAsc).toExist();
        await MyCases.nameColumn.click();
        await expect(MyCases.columnOrderDesc).toExist();

        await MyCases.retainedBy.click();
        await expect(MyCases.columnOrderAsc).toExist();
        await MyCases.retainedBy.click();
        await expect(MyCases.columnOrderDesc).toExist();
    })
})