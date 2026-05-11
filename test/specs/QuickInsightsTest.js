import { browser, expect } from '@wdio/globals'
import CaseLogin from '../pageobjects/login.js'
import SecurePage from '../pageobjects/Dashboard.js'
import MyCases from '../pageobjects/MyCases.js'
import SearchBar from '../pageobjects/SearchBar.js'
import MyTasks from '../pageobjects/MyTasks.js'

describe('Quick Insights Table Testing', () => {
    it('should make a Billable task within the My Tasks table', async () => {
        await CaseLogin.openPage();
        await expect(CaseLogin.username).toExist();
        
        await CaseLogin.login();
        await MyCases.case1.waitForExist();
        await expect(MyTasks.addTask).toExist();

        await MyTasks.addTask.click();
        await MyTasks.addTaskWindow.waitForDisplayed();
        await expect(MyTasks.addTaskWindow).toBeDisplayed();

        await MyTasks.testTitle();
        await expect(MyTasks.title).toHaveValue(MyTasks.titleV);

        await MyTasks.caseDropdown.click();
        await MyTasks.listMenu.waitForDisplayed();
        await expect(MyTasks.listMenu).toBeDisplayed();

        await MyTasks.optionOne.waitForDisplayed(true);
        await MyTasks.optionOne.click();
        await expect(MyTasks.listMenu).not.toBeDisplayed();
        await MyTasks.milestoneMenu.waitForDisplayed();
        await expect(MyTasks.milestoneMenu).toBeDisplayed();

        await MyTasks.milestoneMenu.click();
        await MyTasks.listMenu.waitForDisplayed();
        await expect(MyTasks.listMenu).toBeDisplayed();
        await MyTasks.optionOne.waitForDisplayed();
        if (await MyTasks.optionOne.waitForExist({timeout: 1000})) {
            await MyTasks.optionOne.click();
            await expect(MyTasks.listMenu).not.toBeDisplayed();
            await expect(MyTasks.listMenu).not.toBeDisplayed();

            await MyTasks.billable.click()
            await expect(MyTasks.billableT).toExist();

            await MyTasks.testDesc();
            await expect(MyTasks.textBox).toHaveValue(MyTasks.desc);

            await MyTasks.dateSelect.click();
            await expect(MyTasks.calendar).toBeDisplayed();
            await expect(MyTasks.today).toBeDisplayed();

            await MyTasks.datecolumn1.click();
            await expect(MyTasks.calendar).not.toBeDisplayed();
            await expect(MyTasks.saveBtn).toBeClickable();
            await MyTasks.saveBtn.click();

            await expect(MyTasks.addTaskWindow).not.toBeDisplayed();
            await MyTasks.taskOne.waitForDisplayed();
            await expect(MyTasks.taskOne).toExist();
        } else {
            await MyTasks.failMsg();
            await expect(MyTasks.addTaskWindow).not.toBeDisplayed();
        }

        await MyTasks.popUpNotif.waitForExist({ timeout: 30000 });
        await MyTasks.popUpNotif.click();
        await MyTasks.popUpNotif.waitForExist({ timeout: 1000 }).catch(() => false);
    })
})