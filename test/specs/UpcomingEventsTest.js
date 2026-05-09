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
    })
})