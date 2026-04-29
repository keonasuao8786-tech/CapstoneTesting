import { browser, expect } from '@wdio/globals'
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
        await MyCases.case1.click();
        await expect(MyCases.case1Page).toExist();

        await browser.back();
        await expect(MyCases.searchInput).toBeDisplayed();
        await MyCases.nameColumn.click();

        await MyCases.blankCell1.click();
        await expect(MyCases.case1Page).not.toBeDisplayed();
        await MyCases.client1Cell.click();
        await expect(MyCases.case1Page).not.toBeDisplayed();
        await MyCases.status1Cell.click();
        await expect(MyCases.case1Page).not.toBeDisplayed();

        await MyCases.blankCell1.doubleClick();
        await expect(MyCases.case1Page).toBeDisplayed();   //For now I'm only going to test one case but if I have time at the end I'll add more
        await browser.back();
        await MyCases.nameColumn.click();
        await MyCases.client1Cell.doubleClick();
        await expect(MyCases.case1Page).toBeDisplayed();
        await browser.back();
        await MyCases.nameColumn.click();
        await MyCases.status1Cell.doubleClick();
        await expect(MyCases.case1Page).toBeDisplayed();
    })
    it('should confirm the cases have an icon containing initials and a value in the Status column', async () => {
        
    })
})