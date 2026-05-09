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
        await UpCEvents.eventOne.waitForExist();
        await expect(UpCEvents.eventOne).toExist();
    })
})