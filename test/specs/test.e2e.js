import { browser, expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.js'
import SecurePage from '../pageobjects/Dashboard.js'
import MyCases from '../pageobjects/MyCases.js'
import SearchBar from '../pageobjects/SearchBar.js'
import MyTasks from '../pageobjects/MyTasks.js'

describe('My Cases Table Testing', () => {
    it('should should test the columns in the My Cases Table to make sure they sort the table correctly', async () => {
        await LoginPage.open();
        await expect(LoginPage.inputUsername).toExist();

        await LoginPage.login();
        await MyCases.case1.waitForExist();
        await expect(SearchBar.searchInput).toExist();
    })
    it('should navigate using the cases in the table correctly', async () => {
       
    })
    it('should verify cases display user initials, a status value, and the correct case type association', async () => {
       
    })
    it('should test the search bar to confirm it is working properly, P/N Testing', async () => {
        
    })
    it('will test what happens to the table when you input certain queries', async () => { // I might skip this one due to time constraints
       
    })
})
describe('My Tasks Table Testing', () => {
    it('should test the Add Task window of the My Tasks table', async () => {
        
    })
})