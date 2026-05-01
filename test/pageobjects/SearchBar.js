import { $, expect } from '@wdio/globals'
import Page from './CaseWork.js';
import MyCases from './MyCases.js';

class SearchBar extends Page {
    get clearButton () {
        return $(`[class*="fui-Input__contentAfter"]>[class*="fui-Button"]>[class="fui-Button__icon rywnvv2"]>[class*="fui-Icon"]`)
    }
    async searchUsingExistingCase() {
        const text = await MyCases.case1.getText();
        await MyCases.searchInput.setValue(text);
    }
    async searchUsingAnotherCase() {
        const text = await MyCases.case2.getText();
        await MyCases.searchInput.setValue(text);
    }
    async searchClear () {
        await this.clearButton.click();
    }
}

export default new SearchBar();
