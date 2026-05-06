import { $, expect } from '@wdio/globals'
import Page from './CaseWork.js';
import MyCases from './MyCases.js';

class SearchBar extends Page {
    get searchInput () {
        return $('[class*="fui-Input__input"]');
    }
    get clearButton () {
        return $(`[class*="fui-Input__contentAfter"]>[type="button"]>[class*="fui-Button__icon"]>[class*="fui-Icon"]`);
    }
    get infoIcon () {
        return $(`[class*="fui-InfoButton"]>[class*="fui-Icon fui-Icon-regular"]`);
    }
    get iconText () {
        return $(`[class*="fui-PopoverSurface"]>[class*="___zwjznv0"]`);
    }
    async case1NameSearch () {
        const name = await MyCases.case1.getText();
        await this.searchInput.setValue(name);
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
        if(text.length > 0) {
        await this.searchInput.setValue(text);
        } else {
            console.log(`This row doesn't have a case type`)
        }
    }
    async negativeSearchStatus () {
        const text = await MyCases.statusValue.getText();
        if(text.length > 0) {
        await this.searchInput.setValue(text);
        } else {
            console.log(`This row doesn't have a status`)
        }
    }
    async boundarySearch () {
        await MyCases.nameColumn.doubleClick();
        await MyCases.case1.waitForDisplayed({timeout: 5000});
        const name = await MyCases.case1.getText();

        await this.searchInput.setValue(name);
    }
}

export default new SearchBar();
