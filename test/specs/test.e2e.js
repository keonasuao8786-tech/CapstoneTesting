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
        await expect(MyCases.columnOrderAsc).toExist(); // Checking if the column contains the ascending selector
        await MyCases.nameColumn.click();
        await expect(MyCases.columnOrderDesc).toExist(); // Checking if the column contains the descending selector

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
        await expect(MyCases.caseType).not.toHaveAttr('role', 'button')// Checking if the Case Type column doesn't contain the "button" role
    })
    it('should navigate using the cases in the table correctly', async () => {
        await MyCases.case1.click();
        await MyCases.pageCheck(); // Selecting the name of the case to make sure it takes us to the corresponding case page

        await browser.back();
        await expect(SearchBar.searchInput).toBeDisplayed();
        await MyCases.nameColumn.doubleClick(); // Sorting the column again so I don't have to change my selector after every back

        await MyCases.blankCell1.click();
        await expect(MyCases.case1Page).not.toBeDisplayed();
        await MyCases.clientCell.click(); // Confirming clicking anywhere except the name column regularly won't take us to the case page
        await expect(MyCases.case1Page).not.toBeDisplayed();
        await MyCases.status1Cell.click();
        await expect(MyCases.case1Page).not.toBeDisplayed();

        await MyCases.blankCell1.doubleClick();
        await MyCases.pageCheck();   //For now I'm only going to test one case but if I have time at the end I'll add more
        await browser.back();
        await MyCases.nameColumn.doubleClick();
        await MyCases.client1Cell.doubleClick(); // Confirming that a double click anywhere in the row will take you to the case page
        await MyCases.pageCheck();
        await browser.back();
        await MyCases.nameColumn.doubleClick();
        await MyCases.status1Cell.doubleClick();
        await MyCases.pageCheck();

        await browser.back();
        await MyCases.nameColumn.doubleClick();
    })
    it('should verify cases display user initials, a status value, and the correct case type association', async () => {
        await expect(MyCases.clientIcon).toHaveText("D"); // Confirming the client has an icon with the initials of their name
        
        await expect(MyCases.case1Status).toHaveText("new"); // Checking if the case I am currently testing has a status assigned to it
        
        await expect(MyCases.blankText).toHaveText("big zesty shrek"); // Checking to see what case type is assigned to the case
    })
    it('should test the search bar to confirm it is working properly, P/N Testing', async () => {
        await expect(SearchBar.searchInput).toBeDisplayed();
        await SearchBar.searchUsingExistingCase(); // Searching for the case I am currently testing
        await expect(MyCases.case2).not.toBeDisplayed(); // Confirming the other cases aren't being displayed when I search for a case

        await SearchBar.searchClear(); // Clearing the search bar after every search
        await expect(SearchBar.searchInput).not.toHaveText();

        await SearchBar.searchUsingAnotherCase(); // Searching for another case
        await expect(MyCases.case1).not.toBeDisplayed();

        await SearchBar.searchClear();
        await expect(SearchBar.searchInput).not.toHaveText();

        await SearchBar.searchUsingClientName(); // Searching using the name of a client
        await expect(MyCases.case1).toBeDisplayed(); // Checking to see if the cases retained by that client show up in the search results
        await expect(MyCases.case2).toBeDisplayed();

        await SearchBar.searchClear();
        await expect(SearchBar.searchInput).not.toHaveText();

        await SearchBar.negativeSearchCT(); // Checking to see if searching for the Case Type value returns a result
        await expect(MyCases.case1).not.toBeDisplayed(); // Confirming that no results show up

        await SearchBar.searchClear();
        await expect(SearchBar.searchInput).not.toHaveText();

        await SearchBar.negativeSearchStatus(); // Checking to see if searching for the Status value returns a result
        await expect(MyCases.case1).not.toBeDisplayed(); // Confirming that no results show up

        await SearchBar.searchClear();
        await expect(SearchBar.searchInput).not.toHaveText();

        await SearchBar.infoIcon.click(); // Selecting the information icon next to the search bar to confirm it has text inside of it
    })
})