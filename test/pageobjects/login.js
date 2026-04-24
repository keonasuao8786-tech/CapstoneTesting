import { $ } from '@wdio/globals'
import Page from './CaseWork.js';
import * as dotenv from 'dotenv';

dotenv.config();

class LoginPage extends Page {
   
    get inputUsername () {
        return $('[type="text"]');
    }

    get inputPassword () {
        return $('[type="password"]');
    }

    get btnSubmit () {
        return $('[data-testid="login-submit"]')
    }

    async login (username, password) {
        await this.inputUsername.setValue(process.env.my_username);
        await this.inputPassword.setValue(process.env.my_password);
        await this.btnSubmit.click();
    }

    open () {
        return super.open('login');
    }
}

export default new LoginPage();
