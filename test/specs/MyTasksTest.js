import { browser, expect } from '@wdio/globals'
import CaseLogin from '../pageobjects/login.js'
import SecurePage from '../pageobjects/Dashboard.js'
import MyCases from '../pageobjects/MyCases.js'
import SearchBar from '../pageobjects/SearchBar.js'
import MyTasks from '../pageobjects/MyTasks.js'

describe('My Tasks Table Testing', () => {
    it('should test the Add Task window of the My Tasks table', async () => {
        await CaseLogin.openPage();
        await expect(CaseLogin.username).toExist();
        
        await CaseLogin.login();
        await MyCases.case1.waitForExist();
        await expect(SearchBar.searchInput).toExist();

        await MyTasks.addTask.click();
        await MyTasks.addTaskWindow.waitForDisplayed();
        await expect(MyTasks.addTaskWindow).toBeDisplayed();

        await MyTasks.caseDropdown.click();
        await MyTasks.listMenu.waitForDisplayed();
        await expect(MyTasks.listMenu).toBeDisplayed();

        await MyTasks.optionOne.waitForDisplayed(true);
        await MyTasks.optionOne.click();
        await expect(MyTasks.listMenu).not.toBeDisplayed();

        await MyTasks.milestoneMenu.click();
        await MyTasks.listMenu.waitForDisplayed();
        await expect(MyTasks.listMenu).toBeDisplayed();
        await MyTasks.optionOne.waitForDisplayed();
        if (await MyTasks.optionOne.waitForExist()) {
            await MyTasks.optionOne.click();
            await expect(MyTasks.listMenu).not.toBeDisplayed();
        } else {
            await MyTasks.failMsg();
        }
    })
})