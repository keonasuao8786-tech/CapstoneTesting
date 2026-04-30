import { browser, expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.js'
import SecurePage from '../pageobjects/Dashboard.js'
import MyCases from '../pageobjects/MyCases.js'

describe('My Cases Table Testing', () => {
    it('should should test the columns in the My Cases Table to make sure they sort the table correctly', async () => {
        await LoginPage.open();
        await expect(LoginPage.inputUsername).toExist();

        await LoginPage.login();
        // This pause is there to make sure the assertion doesn't fail before the page is fully loaded
        // await browser.pause(1000)
        await expect(MyCases.searchInput).toExist();

        await MyCases.nameColumn.click();
        // Checking if the column contains the ascending selector
        await expect(MyCases.columnOrderAsc).toExist();
        await MyCases.nameColumn.click();
        // Checking if the column contains the descending selector
        await expect(MyCases.columnOrderDesc).toExist();

        await MyCases.retainedBy.click();
        await expect(MyCases.columnOrderAsc).toExist();
        await MyCases.retainedBy.click();
        await expect(MyCases.columnOrderDesc).toExist();

        await MyCases.statusColumn.click();
        await expect(MyCases.columnOrderAsc).toExist();
        await MyCases.statusColumn.click();
        await expect(MyCases.columnOrderDesc).toExist();

        await MyCases.nameColumn.doubleClick();

        await expect(MyCases.caseType).toBeDisplayed();
        // Checking if the Case Type column doesn't contain the "button" role
        await expect(MyCases.caseType).not.toHaveAttr('role', 'button')
    })
    it('should navigate using the cases in the table correctly', async () => {
        await MyCases.case1.click();
        // Selecting the name of the case to make sure it takes us to the corresponding case page
        await expect(MyCases.case1Page).toExist();

        await browser.back();
        await expect(MyCases.searchInput).toBeDisplayed();
        // Sorting the column again so I don't have to change my selector after every back(granted this will break if somebody makes a case starting with A, B, or Can but I'll cross that bridge when I get to it)
        await MyCases.nameColumn.doubleClick();

        await MyCases.blankCell1.click();
        await expect(MyCases.case1Page).not.toBeDisplayed();
        // Confirming clicking anywhere except the name column regularly won't take us to the case page
        await MyCases.clientCell.click();
        await expect(MyCases.case1Page).not.toBeDisplayed();
        await MyCases.status1Cell.click();
        await expect(MyCases.case1Page).not.toBeDisplayed();

        await MyCases.blankCell1.doubleClick();
        await expect(MyCases.case1Page).toBeDisplayed();   //For now I'm only going to test one case but if I have time at the end I'll add more
        // Confirming that a double click anywhere in the row will take you to the case page
        await browser.back();
        await MyCases.nameColumn.doubleClick();
        await MyCases.client1Cell.doubleClick();
        await expect(MyCases.case1Page).toBeDisplayed();
        await browser.back();
        await MyCases.nameColumn.doubleClick();
        await MyCases.status1Cell.doubleClick();
        await expect(MyCases.case1Page).toBeDisplayed();

        await browser.back();
        await MyCases.nameColumn.doubleClick();
    })
    it('should confirm the cases have an icon containing initials and a value in the Status column, and that the case type column has one of the case types in it or not', async () => {
        // Confirming the client has an icon with the initials of their name
        await expect(MyCases.clientIcon).toHaveText("D")
        // Confirming the case I am currently testing doesn't have a status assigned to it
        await expect(MyCases.case1Status).toHaveText("new")
    })
})