import { browser, expect } from '@wdio/globals'
import CaseLogin from '../pageobjects/login.js'
import MyCases from '../pageobjects/MyCases.js'
import SearchBar from '../pageobjects/SearchBar.js'
import MyTasks from '../pageobjects/MyTasks.js'
import UpCEvents from '../pageobjects/UpcomingEvents.js'

describe('Upcoming Events Table Testing', () => {
    it (`should edit the items in the Upcoming Events table`, async () => {
        await CaseLogin.openPage();
        await expect(CaseLogin.username).toExist();
        
        await CaseLogin.login();
        await UpCEvents.timeSpan.waitForExist();
        await expect(UpCEvents.timeSpan).toExist();

        await UpCEvents.eventOne.waitForExist();
        await UpCEvents.eventOne.moveTo();
        await UpCEvents.editEOne.waitForDisplayed();
        await expect(UpCEvents.editEOne).toBeDisplayed();

        await UpCEvents.editEOne.click();
        await UpCEvents.editEvent.waitForDisplayed();
        await expect(UpCEvents.editEvent).toBeDisplayed();

        await UpCEvents.titleChange();
        await expect(UpCEvents.eventSave).toBeClickable();

        await UpCEvents.eventDate.waitForClickable();
        await UpCEvents.eventDate.click();
        await expect(MyTasks.today).toBeDisplayed();
        await expect(UpCEvents.mayDate).toExist();
        await UpCEvents.mayDate.click();
        await expect(UpCEvents.mayDate).not.toBeDisplayed();

        await UpCEvents.eventDesc.waitForClickable();
        await UpCEvents.descChange();
        const text = UpCEvents.eventDesc.getText();
        await expect(UpCEvents.eventSave).toBeClickable();

        await UpCEvents.eventSave.click();
        await expect(UpCEvents.editEvent).not.toBeDisplayed();

        await MyTasks.popUpNotif.waitForExist({ timeout: 30000 });
        await browser.refresh();

        await UpCEvents.eventOne.waitForDisplayed();
    })
})