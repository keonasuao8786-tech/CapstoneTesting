import { browser, expect } from '@wdio/globals'
import CaseLogin from '../pageobjects/login.js'
import MyCases from '../pageobjects/MyCases.js'
import SearchBar from '../pageobjects/SearchBar.js'
import MyTasks from '../pageobjects/MyTasks.js'
import UpCEvents from '../pageobjects/UpcomingEvents.js'

describe('Upcoming Events Table Testing', () => {
    it(`should edit the items in the Upcoming Events table`, async () => {
        await CaseLogin.openPage();
        await expect(CaseLogin.username).toExist();
        
        await CaseLogin.login();
        await UpCEvents.timeSpan.waitForExist();
        await expect(UpCEvents.timeSpan).toExist();

        await UpCEvents.eventOne.waitForExist();
        await UpCEvents.eventOne.moveTo(); // Opens the Edit Event window and edits the event
        await UpCEvents.editEOne.waitForDisplayed();
        await expect(UpCEvents.editEOne).toBeDisplayed();

        await UpCEvents.editEOne.click();
        await UpCEvents.editEvent.waitForDisplayed();
        await expect(UpCEvents.editEvent).toBeDisplayed();

        await UpCEvents.titleChange(); // Changes the title
        await expect(UpCEvents.eventSave).toBeClickable();

        await UpCEvents.eventDate.waitForClickable(); // Changes the Due By date for the event
        await UpCEvents.eventDate.click();
        await expect(MyTasks.today).toBeDisplayed();
        await expect(UpCEvents.mayDate).toExist();
        await UpCEvents.mayDate.click();
        await expect(UpCEvents.mayDate).not.toBeDisplayed();

        await UpCEvents.eventDesc.waitForClickable(); // Changes the description of the event
        await UpCEvents.descChange();
        await expect(UpCEvents.eventSave).toBeClickable(); // Confirms the changes are valid and can be saved

        await UpCEvents.eventSave.click();
        await expect(UpCEvents.editEvent).not.toBeDisplayed();

        await MyTasks.popUpNotif.waitForExist({ timeout: 30000 }); // Waits for the confirmation notification and refreshes the page to show the changes
        await browser.refresh();

        await UpCEvents.eventOne.waitForDisplayed();
    })
    it('should edit the items in the Upcoming Events table; Negative Testing', async () => {
        await UpCEvents.eventOne.waitForDisplayed();
        await expect(UpCEvents.eventOne).toBeDisplayed();

        await UpCEvents.eventOne.moveTo();
        await UpCEvents.editEOne.waitForDisplayed();
        await expect(UpCEvents.editEOne).toBeDisplayed();

        await UpCEvents.editEOne.click()
        await UpCEvents.editEvent.waitForDisplayed();
        await expect(UpCEvents.editEvent).toBeDisplayed();

        await UpCEvents.descChange2(); // Fills the description box with the maximum amount of characters
        await expect(UpCEvents.errorMsg).not.toBeDisplayed();
        await UpCEvents.eventSave.waitForClickable();
        await expect(UpCEvents.eventSave).toBeClickable();
        await UpCEvents.descBoundary();
        await expect(UpCEvents.eventDesc).toHaveValue(UpCEvents.maxText);
        await console.log('The text box cannot accept any more characters');

        await UpCEvents.titleChangeN(); // Inputs invalid characters in the title area and confirms an error message appears
        await UpCEvents.errorMsg.waitForDisplayed();
        await expect(UpCEvents.errorMsg).toBeDisplayed();
        await expect(UpCEvents.eventSave).not.toBeClickable();
        await UpCEvents.eventTitle.clearValue();
        await expect(UpCEvents.errorMsg).toBeDisplayed();
        await expect(UpCEvents.eventSave).not.toBeClickable();

        await UpCEvents.titleChange2(); // Makes a title at the character limit and confirms no error message appears
        await expect(UpCEvents.errorMsg).not.toBeDisplayed();
        await UpCEvents.eventSave.waitForClickable();
        await expect(UpCEvents.eventSave).toBeClickable();
        await UpCEvents.titleN2(); // Goes over the character limit for the title and confirms an error message appears
        await expect(UpCEvents.errorMsg).toBeDisplayed();
        await expect(UpCEvents.eventSave).not.toBeClickable(); // Confirms the changes are invalid and thus cannot be saved

        await UpCEvents.eventCancel.click(); // Cancels your changes and closes the window
        await UpCEvents.editEvent.waitForDisplayed({ timeout: 1000 }).catch(() => false)
        await expect(UpCEvents.editEvent).not.toBeDisplayed();
    })
    it('should delete the events from the table', async () => {
        await UpCEvents.eventOne.waitForExist();

        await UpCEvents.eventOne.moveTo();
        await expect(UpCEvents.deleteEOne).toBeDisplayed();
        await UpCEvents.deleteEOne.click(); // Waits for the confirmation window to cancel deleting the event
        await UpCEvents.deleteWindow.waitForDisplayed();
        await expect(UpCEvents.deleteWindow).toBeDisplayed();
        await UpCEvents.deleteNo.waitForClickable();
        await expect(UpCEvents.deleteNo).toBeClickable();
        await UpCEvents.deleteNo.click();
        await expect(UpCEvents.deleteWindow).not.toBeDisplayed();

        await UpCEvents.eventOne.moveTo();
        await expect(UpCEvents.deleteEOne).toBeDisplayed();
        await UpCEvents.deleteEOne.click(); // Waits for the confirmation window to confirm deleting the event
        await UpCEvents.deleteWindow.waitForDisplayed();
        await expect(UpCEvents.deleteWindow).toBeDisplayed();
        await UpCEvents.deleteYes.waitForClickable();
        await expect(UpCEvents.deleteYes).toBeClickable();
        await UpCEvents.deleteYes.click();

        await MyTasks.popUpNotif.waitForDisplayed(); // Waits for the confirmation message saying the event was deleted
        await MyTasks.popUpNotif.click();
        await MyTasks.popUpNotif.waitForExist({ timeout: 1000 }).catch(() => false);
        await expect(UpCEvents.deleteWindow).not.toBeDisplayed();
    })
    it('should test the filters in the table', async () => {
        await UpCEvents.eventOne.waitForDisplayed();
        await UpCEvents.timeSpan.click(); // Filters the events based on different time spans
        await MyTasks.listMenu.waitForDisplayed();
        await expect(MyTasks.listMenu).toBeDisplayed();

        await expect(MyTasks.optionFour).toHaveAttr(`aria-selected`, `true`); // Checks if the selected time span is selected
        await MyTasks.optionOne.waitForExist();
        await expect(MyTasks.optionOne).toExist();
        await MyTasks.optionOne.click();
        await MyTasks.listMenu.waitForDisplayed({ timeout: 1000 }).catch(() => false);
        await expect(MyTasks.listMenu).not.toBeDisplayed();

        await UpCEvents.timeSpan.click();
        await expect(MyTasks.optionOne).toHaveAttr(`aria-selected`, `true`);
        await MyTasks.optionTwo.click();
        await MyTasks.listMenu.waitForDisplayed({ timeout: 1000 }).catch(() => false);
        await expect(MyTasks.listMenu).not.toBeDisplayed();

        await UpCEvents.timeSpan.click();
        await expect(MyTasks.optionTwo).toHaveAttr(`aria-selected`, `true`);
        await MyTasks.optionThree.click();
        await MyTasks.listMenu.waitForDisplayed({ timeout: 1000 }).catch(() => false);
        await expect(MyTasks.listMenu).not.toBeDisplayed();

        await UpCEvents.timeSpan.click();
        await expect(MyTasks.optionThree).toHaveAttr(`aria-selected`, `true`);
        await MyTasks.optionFour.click();
        await MyTasks.listMenu.waitForDisplayed({ timeout: 1000 }).catch(() => false);
        await expect(MyTasks.listMenu).not.toBeDisplayed();

        await UpCEvents.timeSpan.click();
        await expect(MyTasks.optionFour).toHaveAttr(`aria-selected`, `true`);
    })
})