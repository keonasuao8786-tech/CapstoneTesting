import { $ } from '@wdio/globals'
import Page from './CaseWork.js';
import SearchBar from './SearchBar.js';

class MyCases extends Page {
    get caseType () {
        return $('[role="columnheader"]:nth-of-type(2)>[class*="fui-DataGridHeaderCell__button"]');
    }
    get nameColumn () {
        return $('[role="columnheader"]:nth-of-type(1)>[class*="fui-DataGridHeaderCell__button"]');
    }
    get retainedBy () {
        return $('[role="columnheader"]:nth-of-type(3)>[class*="fui-DataGridHeaderCell__button"]');
    }
    get statusColumn () {
        return $('[role="columnheader"]:nth-of-type(4)>[class*="fui-DataGridHeaderCell__button"]');
    }
    get columnOrderAsc () {
        return $('[aria-sort="ascending"]');
    }
    get columnOrderDesc () {
        return $('[aria-sort="descending"]');
    }
    get case1 () {
        return $(`[class*="fui-DataGridRow fui-TableRow"]:nth-of-type(1)>[class*="fui-DataGridCell"]>[class*="fui-TableCellLayout"]>[class*="fui-TableCellLayout__content"]>[class="fui-TableCellLayout__main"]>[class*="___1ki8xx5"]>[class*="fui-Link"]>[class*="fui-Text"]`);
    }
    get caseTypeValue () {
        return $(`[class*="fui-DataGridRow"]:nth-of-type(1)>[class*="fui-DataGridCell"]>[class*="fui-TableCellLayout ___1mzifb9"]>[class*="fui-TableCellLayout__content"]>[class="fui-TableCellLayout__main"]>[class*="fui-Text"]`);
    }
    get statusValue () {
        return $(`[class*="fui-DataGridRow"]:nth-of-type(1)>[class*="fui-DataGridCell"]>[class*="fui-TableCellLayout ___1cym8h9 f22iagw"]>[class*="fui-TableCellLayout__content"]>[class="fui-TableCellLayout__main"]>[class*="fui-Text"]`);
    }
    get case2 () {
        return $(`[class*="fui-DataGridRow fui-TableRow"]:nth-of-type(2)>[class*="fui-DataGridCell"]>[class*="fui-TableCellLayout"]>[class*="fui-TableCellLayout__content"]>[class="fui-TableCellLayout__main"]>[class*="___1ki8xx5"]>[class*="fui-Link"]>[class*="fui-Text"]`);
    }
    get casePage () {
        return $(`[class*="fui-Title2"]`);
    }get caseTypeCell () {
        return $('[role="row"]:nth-of-type(1)>[role="gridcell"]:nth-of-type(2)');
    }
    get cTText () {
        return $(`[class*="fui-DataGridBody"]>[class*="fui-DataGridRow"]:nth-of-type(1)>[class*="fui-DataGridCell"]:nth-of-type(2)`);
    }
    get clientName () {
        return $(`[class*="fui-DataGridBody"]>[class*="fui-DataGridRow"]:nth-of-type(1)>[class*="fui-DataGridCell"]:nth-of-type(3)`);
    }
    get clientCell () {
        return $('[role="row"]:nth-of-type(1)>[role="gridcell"]:nth-of-type(3)');
    }
    get client1Cell () {
        return this.clientCell;
    }
    get status1Cell () {
        return $('[role="row"]:nth-of-type(1)>[role="gridcell"]:nth-of-type(4)');
    }
    get case1Status () {
        return $('[class*="fui-DataGridRow"]:nth-of-type(1)>[class*="fui-DataGridCell"]:nth-of-type(4) [class*="fui-Text"]');
    }
    get clientIcon () {
        return $('[role="row"]:nth-of-type(1)>[role="gridcell"]>[class*="fui-TableCellLayout"]>[class*="fui-TableCellLayout__content"]>[class="fui-TableCellLayout__main"]>[style="scrollbar-width: thin;"]>[class="fui-Persona rlroi9i ___1gusw2c f1iantul"]>[role="img"]>[class*="fui-Avatar__initials"]');
    }
    async clientCheck () {
        await this.nameColumn.doubleClick();
        const clientText = await this.clientIcon.getText();
        const statusText = await this.case1Status.getText();
        const caseTypeText = await this.cTText.getText();

        await expect(this.clientIcon).toHaveText(clientText); // Confirming the client has an icon with the initials of their name

        await expect(this.case1Status).toHaveText(statusText); // Checking if the case I am currently testing has a status assigned to it

        await expect(this.cTText).toHaveText(caseTypeText); // Checking to see what case type is assigned to the case
    }
    async case1NameSearch () {
        await this.nameColumn.doubleClick();
        const name = this.case1.getText();
        await SearchBar.searchInput.setValue(name);
        await expect(this.case1).toHaveText(name);
        await expect(this.cTText).toHaveText("big zesty shrek"); // Checking to see what case type is assigned to the case
    }
}
export default new MyCases();
