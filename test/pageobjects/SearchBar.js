import { $, expect } from '@wdio/globals'
import Page from './CaseWork.js';
import MyCases from './MyCases.js';

class SearchBar extends Page {
    async searchUsingExistingCase() {
        const text = await MyCases.case1.getText();
        await MyCases.searchInput.setValue(text);
    }
}

export default new SearchBar();
