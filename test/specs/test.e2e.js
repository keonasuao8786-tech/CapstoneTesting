import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.js'
import SecurePage from '../pageobjects/Dashboard.js'
import MyCases from '../pageobjects/MyCases.js'

describe('My Cases Table Testing', () => {
    it('should should test the columns in the My Cases Table to make sure they sort the table correctly', async () => {
        await LoginPage.open();
        await expect(LoginPage.inputUsername).toExist();

        await LoginPage.login();
        // this pause is there to make sure the assertion doesn't fail before the page is fully loaded
        await browser.pause(1000)
        await expect(MyCases.searchInput).toExist();

        await MyCases.nameColumn.click();
        // checking if the column contains the ascending selector
        await expect(MyCases.columnOrderAsc).toExist();
        await MyCases.nameColumn.click();
        // checking if the column contains the descending selector
        await expect(MyCases.columnOrderDesc).toExist();

        await MyCases.retainedBy.click();
        await expect(MyCases.columnOrderAsc).toExist();
        await MyCases.retainedBy.click();
        await expect(MyCases.columnOrderDesc).toExist();

        await MyCases.statusColumn.click();
        await expect(MyCases.columnOrderAsc).toExist();
        await MyCases.statusColumn.click();
        await expect(MyCases.columnOrderDesc).toExist();

        await expect(MyCases.caseType).toBeDisplayed();
        // checking if the Case Type column doesn't contain the "button" role
        await expect(MyCases.caseType).not.toHaveAttr('role', 'button')
    })
    it('should navigate using the cases in the table correctly', async () => {
        await LoginPage.open();
        await expect(LoginPage.inputUsername).toExist();

        await LoginPage.login();
        await browser.pause(1000)
        await expect(MyCases.searchInput).toExist();

    })
})