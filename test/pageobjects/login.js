import { $ } from '@wdio/globals'
import Page from './CaseWork.js';
import * as dotenv from 'dotenv';

dotenv.config();

class CaseLogin extends Page {
   
    get username () {
        return $('[type="text"]');
    }

    get password () {
        return $('[type="password"]');
    }

    get submit () {
        return $('[data-testid="login-submit"]')
    }

    async login (username, password) {
        await this.username.setValue(process.env.my_username);
        await this.password.setValue(process.env.my_password);
        await this.submit.click();
    }

    async logout () {
        await this.logoutBtn.click();
    }

    openPage () {
        return super.open('login');
    }
}

export default new CaseLogin();
