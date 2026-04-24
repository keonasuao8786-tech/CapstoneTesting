import { $ } from '@wdio/globals'
import Page from './CaseWork.js';

class SecurePage extends Page {
    get primaryText () {
        return $('[class*="fui-Persona__primaryText"]');
    }
    get title () {
        return $('[class="fui-Text ___h37oep0 fk6fouc fod5ikn faaz57k flh3ekv fpgzoln f1w7gpdv f6juhto f1gl81tg f2jf649 f1aehjj5 f1xqy1su"]')[0];
    }
}

export default new SecurePage();
