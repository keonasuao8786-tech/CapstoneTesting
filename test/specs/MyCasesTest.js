import { browser, expect } from '@wdio/globals'
import CaseLogin from '../pageobjects/login.js'
import SecurePage from '../pageobjects/Dashboard.js'
import MyCases from '../pageobjects/MyCases.js'
import SearchBar from '../pageobjects/SearchBar.js'
import MyTasks from '../pageobjects/MyTasks.js'

describe('My Cases Table Testing', () => {
    it('should should test the columns in the My Cases Table to make sure they sort the table correctly', async () => {
        await CaseLogin.openPage();
        await expect(CaseLogin.username).toExist();

        await CaseLogin.login();
        await MyCases.case1.waitForExist();
        await expect(SearchBar.searchInput).toExist();

    //     await MyCases.nameColumn.click();
    //     await expect(MyCases.columnOrderAsc).toExist(); // Checking if the column contains the ascending selector
    //     await MyCases.nameColumn.click();
    //     await expect(MyCases.columnOrderDesc).toExist(); // Checking if the column contains the descending selector

    //     await MyCases.retainedBy.click();
    //     await expect(MyCases.columnOrderAsc).toExist();
    //     await MyCases.retainedBy.click();
    //     await expect(MyCases.columnOrderDesc).toExist();

    //     await MyCases.statusColumn.click();
    //     await expect(MyCases.columnOrderAsc).toExist();
    //     await MyCases.statusColumn.click();
    //     await expect(MyCases.columnOrderDesc).toExist();

    //     await MyCases.nameColumn.doubleClick();

    //     await expect(MyCases.caseType).toBeDisplayed();
    //     await expect(MyCases.caseType).not.toHaveAttr('role', 'button')// Checking if the Case Type column doesn't contain the "button" role
    // })
    // it('should navigate using the cases in the table correctly', async () => {
    //     await MyCases.case1.click();
    //     await expect(MyCases.casePage).toBeDisplayed(); // Selecting the name of the case to make sure it takes us to the corresponding case page

    //     await browser.back();
    //     await expect(SearchBar.searchInput).toBeDisplayed();
    //     await MyCases.nameColumn.waitForClickable();
    //     await MyCases.nameColumn.doubleClick(); // Sorting the column again so I don't have to change my selector after every back

    //     await MyCases.caseTypeCell.click();
    //     await expect(MyCases.case1Page).not.toBeDisplayed();
    //     await MyCases.clientCell.click(); // Confirming clicking anywhere except the name column regularly won't take us to the case page
    //     await expect(MyCases.case1Page).not.toBeDisplayed();
    //     await MyCases.status1Cell.click();
    //     await expect(MyCases.case1Page).not.toBeDisplayed();

    //     await MyCases.caseTypeCell.doubleClick();
    //     await expect(MyCases.casePage).toBeDisplayed();   //For now I'm only going to test one case but if I have time at the end I'll add more
    //     await browser.back();

    //     await MyCases.nameColumn.waitForClickable({timeout: 100});
    //     await MyCases.nameColumn.doubleClick();
    //     await MyCases.client1Cell.doubleClick(); // Confirming that a double click anywhere in the row will take you to the case page
    //     await expect(MyCases.casePage).toBeDisplayed();
    //     await browser.back();

    //     await MyCases.nameColumn.waitForClickable({timeout: 100});
    //     await MyCases.nameColumn.doubleClick();
    //     await MyCases.status1Cell.doubleClick();
    //     await expect(MyCases.casePage).toBeDisplayed();

    //     await browser.back();
    //     await MyCases.nameColumn.waitForClickable({timeout: 100});
    })
    it('should verify cases display user initials, a status value, and the correct case type association', async () => {
            await MyCases.nameColumn.doubleClick();
            const clientText = await MyCases.clientIcon.getText();
            const statusText = await MyCases.case1Status.getText();
            const caseTypeText = await MyCases.cTText.getText();

            await expect(MyCases.clientIcon).toHaveText(clientText);
            await expect(MyCases.case1Status).toHaveText(statusText);
            await expect(MyCases.cTText).toHaveText(caseTypeText);
    })
    it('should test the search bar to confirm it is working properly, P/N Testing', async () => {
        await expect(SearchBar.searchInput).toBeDisplayed();

        await SearchBar.case1NameSearch();

        await SearchBar.searchClear(); // Clearing the search bar after every search
        await expect(SearchBar.searchInput).not.toHaveText();

        await SearchBar.searchUsingClientName(); // Searching using the name of a client
        await expect(MyCases.case1).toBeDisplayed(); // Checking to see if the cases retained by that client show up in the search results

        await SearchBar.searchClear();
        await expect(SearchBar.searchInput).not.toHaveText();

        await SearchBar.negativeSearchCT();
        await expect(MyCases.case1).not.toBeDisplayed();

        await SearchBar.searchClear();
        await expect(SearchBar.searchInput).not.toHaveText();

        await SearchBar.negativeSearchStatus(); // Checking to see if searching for the Status value returns a result
        await expect(MyCases.case1).not.toBeDisplayed(); // Confirming that no results show up

        await SearchBar.searchClear();
        await expect(SearchBar.searchInput).not.toHaveText();

        await SearchBar.infoIcon.click(); // Selecting the information icon next to the search bar to confirm it has text inside of it
    })
    it('will test what happens to the table when you input certain queries', async () => { // I might skip this one due to time constraints
        await expect(SearchBar.searchInput).toBeDisplayed();
        await SearchBar.searchInput.setValue(` `);

        await SearchBar.searchClear();
        await expect(SearchBar.searchInput).not.toHaveValue();
        
        await SearchBar.boundarySearch();
        await expect(MyCases.case1).toBeDisplayed();
        await expect(MyCases.case2).not.toBeDisplayed();
    })
})