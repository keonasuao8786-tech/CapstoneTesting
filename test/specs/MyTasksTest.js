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
        await expect(MyTasks.taskOne).toExist();

        // await MyTasks.addTask.click();
        // await MyTasks.addTaskWindow.waitForDisplayed();
        // await expect(MyTasks.addTaskWindow).toBeDisplayed();

        // await MyTasks.caseDropdown.click();
        // await MyTasks.listMenu.waitForDisplayed();
        // await expect(MyTasks.listMenu).toBeDisplayed();

        // await MyTasks.optionOne.waitForDisplayed(true);
        // await MyTasks.optionOne.click();
        // await expect(MyTasks.listMenu).not.toBeDisplayed();

        // await MyTasks.milestoneMenu.click();
        // await MyTasks.listMenu.waitForDisplayed();
        // await expect(MyTasks.listMenu).toBeDisplayed();
        // await MyTasks.optionOne.waitForDisplayed();
        // if (await MyTasks.optionOne.waitForExist({timeout: 1000})) {
        //     await MyTasks.optionOne.click();
        //     await expect(MyTasks.listMenu).not.toBeDisplayed();
        //     await expect(MyTasks.listMenu).not.toBeDisplayed();

        //     await MyTasks.billable.click()
        //     await expect(MyTasks.billableT).toExist();

        //     await MyTasks.testDesc();
        //     await expect(MyTasks.textBox).toHaveValue(MyTasks.desc);

        //     await MyTasks.dueBy.click();
        //     await MyTasks.dateSelect.waitForDisplayed();
        //     await expect(MyTasks.dateSelect).toBeDisplayed();
        //     await MyTasks.dateSelect.click();
        //     await expect(MyTasks.calendar).toBeDisplayed();
        //     await expect(MyTasks.today).toBeDisplayed();

        //     await MyTasks.datecolumn1.click();
        //     await expect(MyTasks.calendar).not.toBeDisplayed();
        //     await expect(MyTasks.saveBtn).toBeClickable();
        //     await MyTasks.saveBtn.click();

        //     await expect(MyTasks.addTaskWindow).not.toBeDisplayed();
        //     await MyTasks.taskOne.waitForDisplayed();
        //     await expect(MyTasks.taskOne).toExist();
        // } else {
        //     await MyTasks.failMsg();
        //     await expect(MyTasks.addTaskWindow).not.toBeDisplayed();
        // }
    })
    it('should test the options for each task', async () => {
        await MyTasks.taskOne.moveTo();
        await MyTasks.closeBtn.waitForEnabled();
        await expect(MyTasks.closeBtn).toBeDisplayed();

        await MyTasks.startBtn.click();
        await MyTasks.stopBtn.waitForClickable();
        await expect(MyTasks.stopBtn).toBeClickable();
        await MyTasks.stopBtn.click();
        await MyTasks.taskOne.moveTo();
        await expect(MyTasks.stopBtn).not.toBeClickable();

        await MyTasks.taskOne.moveTo();
        await MyTasks.addTime.waitForEnabled();
        await expect(MyTasks.addTime).toBeClickable();
        await MyTasks.addTime.click();
        await MyTasks.addTimeWindow.waitForDisplayed();
        await expect(MyTasks.addTimeCancel).toBeDisplayed();
        await MyTasks.addTimeCancel.click();
        await expect(MyTasks.addTimeWindow).not.toBeDisplayed();
    })
})

// if (await MyTasks.billableT.waitForExist()) { //SAVE THIS FOR EDITING A TASK
//                 await expect(MyTasks.billableF).not.toExist();
//             } else {
//                 await expect(MyTasks.billableF).toExist();
//                 await expect(MyTasks.billableT).not.toExist();
//             }