import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await browser.pause(1000)
    })
})

