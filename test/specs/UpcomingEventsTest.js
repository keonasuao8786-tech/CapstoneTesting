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

        // await UpCEvents.eventOne.waitForExist();
        // await UpCEvents.eventOne.moveTo();
        // await UpCEvents.editEOne.waitForDisplayed();
        // await expect(UpCEvents.editEOne).toBeDisplayed();

        // await UpCEvents.editEOne.click();
        // await UpCEvents.editEvent.waitForDisplayed();
        // await expect(UpCEvents.editEvent).toBeDisplayed();

        // await UpCEvents.titleChange();
        // await expect(UpCEvents.eventSave).toBeClickable();

        // await UpCEvents.eventDate.waitForClickable();
        // await UpCEvents.eventDate.click();
        // await expect(MyTasks.today).toBeDisplayed();
        // await expect(UpCEvents.mayDate).toExist();
        // await UpCEvents.mayDate.click();
        // await expect(UpCEvents.mayDate).not.toBeDisplayed();

        // await UpCEvents.eventDesc.waitForClickable();
        // await UpCEvents.descChange();
        // const text = UpCEvents.eventDesc.getText();
        // await expect(UpCEvents.eventSave).toBeClickable();

        // await UpCEvents.eventSave.click();
        // await expect(UpCEvents.editEvent).not.toBeDisplayed();

        // await MyTasks.popUpNotif.waitForExist({ timeout: 30000 });
        // await browser.refresh();

        // await UpCEvents.eventOne.waitForDisplayed();
        // await expect(UpCEvents.eventDesc).not.toHaveValue(text);
    })
    // it('should edit the items in the Upcoming Events table; Negative Testing', async () => {
    //     await UpCEvents.eventOne.waitForDisplayed();
    //     await expect(UpCEvents.eventOne).toBeDisplayed();

    //     await UpCEvents.eventOne.moveTo();
    //     await UpCEvents.editEOne.waitForDisplayed();
    //     await expect(UpCEvents.editEOne).toBeDisplayed();

    //     await UpCEvents.editEOne.click()
    //     await UpCEvents.editEvent.waitForDisplayed();
    //     await expect(UpCEvents.editEvent).toBeDisplayed();

    //     await UpCEvents.descChange2();
    //     await expect(UpCEvents.errorMsg).not.toBeDisplayed();
    //     await UpCEvents.eventSave.waitForClickable();
    //     await expect(UpCEvents.eventSave).toBeClickable();
    //     await UpCEvents.descBoundary();
    //     await expect(UpCEvents.eventDesc).toHaveValue(UpCEvents.maxText);
    //     await console.log('The text box cannot accept any more characters');

    //     await UpCEvents.titleChangeN();
    //     await UpCEvents.errorMsg.waitForDisplayed();
    //     await expect(UpCEvents.errorMsg).toBeDisplayed();
    //     await expect(UpCEvents.eventSave).not.toBeClickable();
    //     await UpCEvents.eventTitle.clearValue();
    //     await expect(UpCEvents.errorMsg).toBeDisplayed();
    //     await expect(UpCEvents.eventSave).not.toBeClickable();

    //     await UpCEvents.titleChange2();
    //     await expect(UpCEvents.errorMsg).not.toBeDisplayed();
    //     await UpCEvents.eventSave.waitForClickable();
    //     await expect(UpCEvents.eventSave).toBeClickable();
    //     await UpCEvents.titleN2();
    //     await expect(UpCEvents.errorMsg).toBeDisplayed();
    //     await expect(UpCEvents.eventSave).not.toBeClickable();

    //     await UpCEvents.eventCancel.click();
    //     await UpCEvents.editEvent.waitForDisplayed({ timeout: 1000 }).catch(() => false)
    //     await expect(UpCEvents.editEvent).not.toBeDisplayed();
    // })
    it('should delete the events from the table', async () => {
        await UpCEvents.eventOne.waitForExist();

        await UpCEvents.eventOne.moveTo();
        await expect(UpCEvents.deleteEOne).toBeDisplayed();
        await UpCEvents.deleteEOne.click();
        await UpCEvents.deleteWindow.waitForDisplayed();
        await expect(UpCEvents.deleteWindow).toBeDisplayed();
        await UpCEvents.deleteNo.waitForClickable();
        await expect(UpCEvents.deleteNo).toBeClickable();
        await UpCEvents.deleteNo.click();
        await expect(UpCEvents.deleteWindow).not.toBeDisplayed();

        await UpCEvents.eventOne.moveTo();
        await expect(UpCEvents.deleteEOne).toBeDisplayed();
        await UpCEvents.deleteEOne.click();
        await UpCEvents.deleteWindow.waitForDisplayed();
        await expect(UpCEvents.deleteWindow).toBeDisplayed();
        await UpCEvents.deleteYes.waitForClickable();
        await expect(UpCEvents.deleteYes).toBeClickable();
        await UpCEvents.deleteYes.click();

        await MyTasks.popUpNotif.waitForDisplayed();
        await MyTasks.popUpNotif.click();
        await MyTasks.popUpNotif.waitForExist({ timeout: 1000 }).catch(() => false);
        await expect(UpCEvents.deleteWindow).not.toBeDisplayed();
    })
    it('should test the filters in the table', async () => {
        await UpCEvents.eventOne.waitForDisplayed();
    })
})