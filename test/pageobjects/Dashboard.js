import { $ } from '@wdio/globals'
import Page from './CaseWork.js';

class SecurePage extends Page {
    get primaryText () {
        return $('[class*="fui-Persona__primaryText"]');
    }
    get searchInput () {
        return $('[class*="fui-Input__input"]');
    }
}

export default new SecurePage();
