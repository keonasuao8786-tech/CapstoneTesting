import { browser, expect } from '@wdio/globals'
import CaseLogin from '../pageobjects/login.js'
import SecurePage from '../pageobjects/Dashboard.js'
import MyCases from '../pageobjects/MyCases.js'
import SearchBar from '../pageobjects/SearchBar.js'
import MyTasks from '../pageobjects/MyTasks.js'
import QuickInsights from '../pageobjects/QuickInsights.js'

describe('Quick Insights Table Testing', () => {
    it('should make a Billable and Non-Billable task within the My Tasks table', async () => {
        await CaseLogin.openPage();
        await expect(CaseLogin.username).toExist();
        
        await CaseLogin.login();
        await MyCases.case1.waitForExist();
        await expect(MyTasks.addTask).toExist();

        await MyTasks.addTask.click(); // Creates two tasks for the purpose of adding time
        await MyTasks.addTaskWindow.waitForDisplayed();
        await expect(MyTasks.addTaskWindow).toBeDisplayed();

        await MyTasks.testTitle();
        await expect(MyTasks.title).toHaveValue(MyTasks.titleV);

        await MyTasks.caseDropdown.click();
        await MyTasks.listMenu.waitForDisplayed();
        await expect(MyTasks.listMenu).toBeDisplayed();

        await MyTasks.optionOne.waitForDisplayed();
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
        await MyTasks.popUpNotif.waitForExist({ timeout: 1000 }).catch(() => false);
    })
    it('should test the Quick Insights table and how it connects to the Billable features of the My Tasks table', async () => {
        await expect(QuickInsights.bTimeMeter).not.toHaveAttr('aria-valuenow', '100')

        await MyTasks.taskOne.waitForDisplayed();
        await MyTasks.taskTwo.waitForDisplayed();
        await expect(MyTasks.taskOne).toBeDisplayed();
        await expect(MyTasks.taskTwo).toBeDisplayed();

        await MyTasks.taskOne.moveTo(); // Opens the Add Time window and adds time to a Billable task
        await expect(MyTasks.addTimeA).toBeDisplayed();
        await MyTasks.addTimeA.click();
        await MyTasks.addTimeWindow.waitForDisplayed();

        await expect(QuickInsights.timeInput).toBeDisplayed();
        await QuickInsights.addingTime();
        await expect(QuickInsights.timeSubmit).toBeClickable();

        await QuickInsights.timeSubmit.click();
        await MyTasks.addTimeWindow.waitForDisplayed({ timeout: 1000 }).catch(() => false);
        await expect(MyTasks.addTimeWindow).not.toBeDisplayed();

        await expect(QuickInsights.timeSpan).toBeDisplayed(); // Refreshes the Quick Insights table to confirm the time added is reflected
        await QuickInsights.timeSpan.click();
        await MyTasks.listMenu.waitForDisplayed();
        await expect(MyTasks.listMenu).toBeDisplayed();

        await expect(MyTasks.optionTwo).toHaveAttr('aria-selected', 'true');
        await MyTasks.optionOne.click();
        await MyTasks.listMenu.waitForDisplayed({ timeout: 1000 }).catch(() => false);
        await expect(MyTasks.listMenu).not.toBeDisplayed();
        await expect(QuickInsights.bTimeMeter).toHaveAttr('aria-valuenow', '100');

        await MyTasks.taskTwo.moveTo(); // Opens the Add Time window and adds time to a Non-Billable task
        await expect(MyTasks.addTimeB).toBeDisplayed();
        await MyTasks.addTimeB.click();
        await MyTasks.addTimeWindow.waitForDisplayed();

        await expect(QuickInsights.timeInput).toBeDisplayed();
        await QuickInsights.addingTime();
        await expect(QuickInsights.timeSubmit).toBeClickable();

        await QuickInsights.timeSubmit.click();
        await MyTasks.addTimeWindow.waitForDisplayed({ timeout: 1000 }).catch(() => false);
        await expect(MyTasks.addTimeWindow).not.toBeDisplayed();

        await expect(QuickInsights.timeSpan).toBeDisplayed(); // Refreshes the Quick Insights table to confirm the progress circle has changed
        await QuickInsights.timeSpan.click();
        await MyTasks.listMenu.waitForDisplayed();
        await expect(MyTasks.listMenu).toBeDisplayed();

        await expect(MyTasks.optionOne).toHaveAttr('aria-selected', 'true');
        await MyTasks.optionTwo.click();
        await MyTasks.listMenu.waitForDisplayed({ timeout: 1000 }).catch(() => false);
        await expect(MyTasks.listMenu).not.toBeDisplayed();
        await expect(QuickInsights.bTimeMeter).toHaveAttr('aria-valuenow', '50');

        await browser.refresh(); // Resets the Billable Time progress indicator

        await QuickInsights.bTimeMeter.waitForStable();
        await expect(QuickInsights.bTimeMeter).toHaveAttr('aria-valuenow', '0');

        await MyTasks.taskTwo.moveTo(); // Adds time to a Non-Billable task without adding time to a Billable one
        await expect(MyTasks.addTimeB).toBeDisplayed();
        await MyTasks.addTimeB.click();
        await MyTasks.addTimeWindow.waitForDisplayed();

        await expect(QuickInsights.timeInput).toBeDisplayed();
        await QuickInsights.addingTime();
        await expect(QuickInsights.timeSubmit).toBeClickable();

        await QuickInsights.timeSubmit.click(); // Confirming the Billable Time indicator hasn't updated it's progress after refreshing
        await MyTasks.addTimeWindow.waitForDisplayed({ timeout: 1000 }).catch(() => false);
        await expect(MyTasks.addTimeWindow).not.toBeDisplayed();
        await expect(QuickInsights.bTimeMeter).toHaveAttr('aria-valuenow', '0');
    })
    it('should test the filters in the Quick Insights table', async () => {
        await expect(QuickInsights.timeSpan).toBeDisplayed();
        await QuickInsights.timeSpan.click(); // Changes the graph in the table to show a different time span based
        await MyTasks.listMenu.waitForDisplayed();
        await MyTasks.optionOne.waitForClickable();
        await expect(MyTasks.optionTwo).toHaveAttr('aria-selected', 'true');
        await MyTasks.optionThree.click();
        await MyTasks.listMenu.waitForDisplayed({ timeout: 1000 }).catch(() => false);

        await QuickInsights.timeSpan.click();
        await MyTasks.listMenu.waitForDisplayed();
        await MyTasks.optionOne.waitForClickable();
        await expect(MyTasks.optionThree).toHaveAttr('aria-selected', 'true');
        await MyTasks.optionOne.click();
        await MyTasks.listMenu.waitForDisplayed({ timeout: 1000 }).catch(() => false);
        
        await expect(QuickInsights.viewMenu).toBeDisplayed(); // Changes the graph to show only your or everyone in your workspace's time logged
        await QuickInsights.viewMenu.click();
        await MyTasks.listMenu.waitForDisplayed();
        await MyTasks.optionOne.waitForClickable();
        await expect(MyTasks.optionOne).toHaveAttr('aria-selected', 'true');
        await MyTasks.optionTwo.click();
        await MyTasks.listMenu.waitForDisplayed({ timeout: 1000 }).catch(() => false);

        await QuickInsights.viewMenu.click();
        await MyTasks.listMenu.waitForDisplayed();
        await MyTasks.optionOne.waitForClickable();
        await expect(MyTasks.listMenu).toBeDisplayed();
        await expect(MyTasks.optionTwo).toHaveAttr('aria-selected', 'true');
    })
    it('should delete the tasks after', async () => {
        await MyTasks.taskTwo.moveTo(); // Closes both tasks without completing them
        await expect(MyTasks.closeBtnB).toBeDisplayed();
        await MyTasks.closeBtnB.click();
        await expect(MyTasks.taskTwo).not.toBeDisplayed();
        await MyTasks.taskOne.moveTo();
        await expect(MyTasks.closeBtnA).toBeDisplayed();
        await MyTasks.closeBtnA.click();
        await expect(MyTasks.taskOne).not.toBeDisplayed();
    })
})