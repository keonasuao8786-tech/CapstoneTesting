import { $, expect } from '@wdio/globals'
import Page from './CaseWork.js';
import MyCases from './MyCases.js';

class SearchBar extends Page {
    get searchInput () {
        return $('[class*="fui-Input__input"]');
    }
    get clearButton () {
        return $(`[class*="fui-Input__contentAfter"]>[class*="fui-Button"]>[class="fui-Button__icon rywnvv2"]>[class*="fui-Icon"]`);
    }
    get infoIcon () {
        return $(`[class*="fui-InfoButton"]>[class*="fui-Icon fui-Icon-regular"]`);
    }
    get iconText () {
        return $(`[class*="fui-PopoverSurface"]>[class*="___zwjznv0"]`);
    }
}

export default new SearchBar();
