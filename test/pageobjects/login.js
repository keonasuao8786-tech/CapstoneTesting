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
    get logoutBtn () {
        return $('[class="fui-Button r1f29ykk ___oh06sk0 f1c21dwh f1p3nwhy f11589ue f1q5o8ev f1pdflbu fonrgv7 fjxutwb f1s2uweq fr80ssc f1ukrpxl fecsdlb f139oj5f ft1hn21 fuxngvv fkoldzo fhvnf4x fb6swo4 f1klyf7k f232fm2 f1l983o9 f1nhwcv0 f1gm6xmp fxoo9op f1v3eptx f1i0gk12 fd4bjan f18ktai2 fwbmr0d f44c6la f1ni9pe4 f12awlo"]:nth-of-type(1)')
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
