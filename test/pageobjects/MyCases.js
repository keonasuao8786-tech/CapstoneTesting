import { $ } from '@wdio/globals'
import Page from './CaseWork.js';

class MyCases extends Page {
    get caseType () {
        return $('[class*="___1g9gf5i"]');
    }
    get searchInput () {
        return $('[class*="fui-Input__input"]');
    }
}
export default new MyCases();
