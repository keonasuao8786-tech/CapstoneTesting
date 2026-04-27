import { $ } from '@wdio/globals'
import Page from './CaseWork.js';

class SecurePage extends Page {
    get primaryText () {
        return $('[class*="fui-Persona__primaryText"]');
    }
    get title () {
        return $('[id="infolabel-rd__label"]>[class*="fui-Text ___h37oep0"]');
    }
}

export default new SecurePage();
