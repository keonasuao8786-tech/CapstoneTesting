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

        await MyTasks.taskOne.waitForDisplayed();

        await MyTasks.addTask.moveTo();
        await MyTasks.addTask.click();
        await MyTasks.addTaskWindow.waitForDisplayed();
        await expect(MyTasks.addTaskWindow).toBeDisplayed();

        await MyTasks.title.waitForClickable();
        await expect(MyTasks.saveBtn).not.toBeClickable();
        await MyTasks.testTitle();
        await expect(MyTasks.title).toHaveValue(MyTasks.titleV);

        await MyTasks.caseDropdown.click();
        await MyTasks.listMenu.waitForDisplayed();
        await expect(MyTasks.listMenu).toBeDisplayed();

        await MyTasks.optionOne.waitForDisplayed(true);
        await MyTasks.optionOne.moveTo();
        await MyTasks.optionOne.click();
        await expect(MyTasks.listMenu).not.toBeDisplayed();

        await MyTasks.milestoneMenu.click();
        await MyTasks.listMenu.waitForDisplayed();
        await expect(MyTasks.listMenu).toBeDisplayed();
        await MyTasks.optionOne.waitForDisplayed();
        if (await MyTasks.optionOne.waitForExist({timeout: 1000})) {
            await MyTasks.optionOne.click();
            await expect(MyTasks.listMenu).not.toBeDisplayed();
            await expect(MyTasks.listMenu).not.toBeDisplayed();

            await expect(MyTasks.billableF).toExist();

            await MyTasks.testDesc2();
            await expect(MyTasks.textBox).toHaveValue(MyTasks.desc2);

            await MyTasks.inputFill()
            await expect(MyTasks.category).toHaveValue(MyTasks.testCategory);
            await expect(MyTasks.estHours).toHaveValue(MyTasks.testHours);

            await expect(MyTasks.saveBtn).toBeClickable();
            await MyTasks.saveBtn.click();

            await expect(MyTasks.addTaskWindow).not.toBeDisplayed();
            await MyTasks.taskTwo.waitForDisplayed();
            await expect(MyTasks.taskTwo).toExist();
        } else {
            await MyTasks.failMsg();
            await expect(MyTasks.addTaskWindow).not.toBeDisplayed();
        }

        await MyTasks.popUpNotif.waitForExist({ timeout: 30000 });
        await MyTasks.popUpNotif.click();
    })
    it('should edit the information in each task', async () => {
        await MyTasks.taskOne.moveTo();
        await expect(MyTasks.editBtnA).toBeDisplayed();

        await MyTasks.editBtnA.click();
        await MyTasks.editTaskWin.waitForDisplayed();
        await expect(MyTasks.editTaskWin).toBeDisplayed();
        await MyTasks.milestoneMenu.click();
        const optionTwoExists = await MyTasks.optionTwo.waitForExist({ timeout: 1000 }).catch(() => false);
        if (optionTwoExists) {
            await MyTasks.optionTwo.click();
            await expect(MyTasks.listMenu).not.toBeDisplayed();
        } else {
            await MyTasks.milestoneMenu.click();
            await expect(MyTasks.listMenu).not.toBeDisplayed();
        }
        const billTrue = await MyTasks.billableT.waitForExist({ timeout: 1000 }).catch(() => false);
        if (billTrue) {
            await MyTasks.billable.click();
            await expect(MyTasks.billableF).toExist();
        } else {
            await MyTasks.billable.click();
            await expect(MyTasks.billableT).toExist();
        }

        await expect(MyTasks.saveBtn).toBeClickable();

        await MyTasks.testResults();
        await expect(MyTasks.results).toHaveValue(MyTasks.resultEdit);

        await MyTasks.discTab.click();
        await expect(MyTasks.caseNote).toBeDisplayed();

        await MyTasks.cNTest();
        await expect(MyTasks.caseNote).toHaveValue(MyTasks.noteTest);
        await expect(MyTasks.cNAddBtn).toBeClickable();
        await MyTasks.cNAddBtn.click();

        await expect(MyTasks.noteOne).toExist();
        await expect(MyTasks.saveBtn).toBeClickable();

        await MyTasks.saveBtn.click();
        await expect(MyTasks.editTaskWin).not.toBeDisplayed();

        await MyTasks.popUpNotif.waitForExist({ timeout: 30000 });
        await MyTasks.popUpNotif.click();
    })
    it(`should filter and sort the table using various parameters`, async () => {
        await expect(MyTasks.taskOne).toBeDisplayed();
        await MyTasks.filterCase.waitForClickable();
        await MyTasks.sortCreation.waitForClickable();
        await expect(MyTasks.filterCase).toBeDisplayed();
        await expect(MyTasks.sortCreation).toBeDisplayed();

        await MyTasks.filterCase.click();
        await expect(MyTasks.listMenu).toBeDisplayed();
        await expect(MyTasks.optionOne).toHaveAttr(`aria-selected`, `true`);

        await MyTasks.optionTwo.click();
        await expect(MyTasks.listMenu).not.toBeDisplayed();
        await MyTasks.filterCase.click();
        await expect(MyTasks.listMenu).toBeDisplayed();
        await expect(MyTasks.optionTwo).toHaveAttr(`aria-selected`, `true`);

        await expect(MyTasks.optionThree).toExist();
        await MyTasks.optionThree.click();
        await expect(MyTasks.listMenu).not.toBeDisplayed();
        await expect(MyTasks.taskOne).not.toBeDisplayed();

        await MyTasks.filterCase.click();
        await expect(MyTasks.listMenu).toBeDisplayed();
        await expect(MyTasks.optionOne).toBeDisplayed();
        await MyTasks.optionOne.click();

        await MyTasks.sortCreation.waitForClickable();
        await MyTasks.sortCreation.click();
        await MyTasks.listMenu.waitForDisplayed();
        await expect(MyTasks.optionOne).toBeDisplayed();
        await expect(MyTasks.optionOne).toHaveAttr(`aria-selected`, `true`);
        await expect(MyTasks.optionThree).toExist();
        await MyTasks.optionThree.click();
        await expect(MyTasks.listMenu).not.toBeDisplayed();
    })
    it('should test the options for each task', async () => {
        await MyTasks.taskOne.moveTo();
        await MyTasks.closeBtnA.waitForDisplayed();
        await expect(MyTasks.closeBtnA).toBeDisplayed();

        await MyTasks.startBtnA.click();
        await MyTasks.stopBtnA.waitForClickable();
        await expect(MyTasks.stopBtnA).toBeClickable();
        await MyTasks.stopBtnA.click();
        await MyTasks.taskOne.moveTo();
        await expect(MyTasks.stopBtnA).not.toBeClickable();

        await MyTasks.taskOne.moveTo();
        await MyTasks.addTimeA.waitForEnabled();
        await expect(MyTasks.addTimeA).toBeClickable();
        await MyTasks.addTimeA.click();
        await MyTasks.addTimeWindow.waitForDisplayed();
        await expect(MyTasks.addTimeCancel).toBeDisplayed();
        await MyTasks.addTimeCancel.click();
        await expect(MyTasks.addTimeWindow).not.toBeDisplayed();

        await MyTasks.taskTwo.moveTo();
        await expect(MyTasks.completeBtnB).toBeDisplayed();
        await MyTasks.completeBtnB.click();
        await expect(MyTasks.taskTwo).not.toExist();

        await MyTasks.taskOne.moveTo();
        await expect(MyTasks.closeBtnA).toBeDisplayed();
        await MyTasks.closeBtnA.click();
        await expect(MyTasks.taskOne).not.toExist();
    })
})