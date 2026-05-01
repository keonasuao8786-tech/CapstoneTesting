import { browser, expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.js'
import SecurePage from '../pageobjects/Dashboard.js'
import MyCases from '../pageobjects/MyCases.js'
import SearchBar from '../pageobjects/SearchBar.js'

describe('My Cases Table Testing', () => {
    it('should should test the columns in the My Cases Table to make sure they sort the table correctly', async () => {
        await LoginPage.open();
        await expect(LoginPage.inputUsername).toExist();

        await LoginPage.login();
        await expect(SearchBar.searchInput).toExist();

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
        await MyCases.pageCheck();

        await browser.back();
        await expect(SearchBar.searchInput).toBeDisplayed();
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
        await MyCases.pageCheck();   //For now I'm only going to test one case but if I have time at the end I'll add more
        // Confirming that a double click anywhere in the row will take you to the case page
        await browser.back();
        await MyCases.nameColumn.doubleClick();
        await MyCases.client1Cell.doubleClick();
        await MyCases.pageCheck();
        await browser.back();
        await MyCases.nameColumn.doubleClick();
        await MyCases.status1Cell.doubleClick();
        await MyCases.pageCheck();

        await browser.back();
        await MyCases.nameColumn.doubleClick();
    })
    it('should verify cases display user initials, a status value, and the correct case type association', async () => {
        // Confirming the client has an icon with the initials of their name
        await expect(MyCases.clientIcon).toHaveText("D")
        // Confirming the case I am currently testing doesn't have a status assigned to it
        await expect(MyCases.case1Status).toHaveText("new")
        // Checking to see what case type is assigned to the case
        await expect(MyCases.blankText).toHaveText("big zesty shrek")
    })
    it('should test the search bar to confirm it is working properly, P/N Testing', async () => {
        await expect(SearchBar.searchInput).toBeDisplayed();
        await SearchBar.searchUsingExistingCase();
        await expect(MyCases.case2).not.toBeDisplayed();

        await SearchBar.searchClear();
        await expect(SearchBar.searchInput).not.toHaveText();

        await SearchBar.searchUsingAnotherCase();
        await expect(MyCases.case1).not.toBeDisplayed();

        await SearchBar.searchClear();
        await expect(SearchBar.searchInput).not.toHaveText();
        await SearchBar.searchUsingClientName();
        await expect(MyCases.case1).toBeDisplayed();
        await expect(MyCases.case2).toBeDisplayed();

        await SearchBar.searchClear();
        await expect(SearchBar.searchInput).not.toHaveText();

        await SearchBar.negativeSearchClient();
        await expect(MyCases.case1).not.toBeDisplayed();

        await SearchBar.searchClear();
        await expect(SearchBar.searchInput).not.toHaveText();

        await SearchBar.negativeSearchStatus();
        await expect(MyCases.case1).not.toBeDisplayed();
    })
})