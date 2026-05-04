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
    async searchUsingExistingCase() {
        const text = await MyCases.case1.getText();
        await this.searchInput.setValue(text);
    }
    async searchUsingAnotherCase() {
        const text = await MyCases.case2.getText();
        await this.searchInput.setValue(text);
    }
    async searchUsingClientName() {
        const text = await MyCases.clientName.getText();
        await this.searchInput.setValue(text);
    }
    async searchClear () {
        await this.clearButton.click();
    }

    async negativeSearchCT () {
        const text = await MyCases.caseTypeValue.getText();
        await this.searchInput.setValue(text);
    }
    async negativeSearchStatus () {
        const text = await MyCases.statusValue.getText();
        await this.searchInput.setValue(text);
    }
}

export default new SearchBar();
