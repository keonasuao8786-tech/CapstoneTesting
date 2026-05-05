import { $ } from '@wdio/globals'
import Page from './CaseWork.js';

class MyCases extends Page {
    get caseType () {
        return $('[role="columnheader"]>[class*="___1g9gf5i"]');
    }
    get nameColumn () {
        return $('//span[@class="fui-TableCellLayout__main"][contains(text(),"Name")]');
    }
    get retainedBy () {
        return $('//span[@class="fui-TableCellLayout__main"][contains(text(),"Retained By")]');
    }
    get statusColumn () {
        return $('//span[@class="fui-TableCellLayout__main"][contains(text(),"Status")]');
    }
    get columnOrderAsc () {
        return $('[aria-sort ="ascending"]');
    }
    get columnOrderDesc () {
        return $('[aria-sort ="descending"]');
    }
    get case1 () {
        return $(`//span[@class="fui-Text ___c56hd20 fk6fouc fkhj508 f1i3iumi figsok6 fpgzoln f1w7gpdv f6juhto f1gl81tg f2jf649"][contains(text(),"ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ")]`);
    }
    get caseTypeValue () {
        return $(`[class*="fui-DataGridRow"]:first-of-type>[class*="fui-DataGridCell"]>[class*="fui-TableCellLayout ___1mzifb9"]>[class*="fui-TableCellLayout__content"]>[class="fui-TableCellLayout__main"]>[class*="fui-Text"]`);
    }
    get statusValue () {
        return $(`[class*="fui-DataGridRow"]:first-of-type>[class*="fui-DataGridCell"]>[class*="fui-TableCellLayout ___1cym8h9 f22iagw"]>[class*="fui-TableCellLayout__content"]>[class="fui-TableCellLayout__main"]>[class*="fui-Text"]`);
    }
    get case2 () {
        return $(`//span[@class="fui-Text ___c56hd20 fk6fouc fkhj508 f1i3iumi figsok6 fpgzoln f1w7gpdv f6juhto f1gl81tg f2jf649"][contains(text(),"William (DONT DELETE) ")]`);
    }
    get case1Page () {
        return $(`[class*="fui-Title2"]`);
    }
    get blankCell1 () {
        return $('[role="row"]:nth-of-type(1)>[role="gridcell"]:nth-of-type(2)');
    }
    get blankText () {
        return $(`[class*="fui-DataGridRow"]:first-of-type>[class*="fui-DataGridCell"]>[class="fui-TableCellLayout ___1mzifb9 f22iagw f122n59 faqewft f1izfyrr f1aehjj5 f1xqy1su f1a3p1vp f1cmbuwj fz5stix"]>[class*="fui-TableCellLayout__content"]>[class="fui-TableCellLayout__main"]>[class*="fui-Text"]`);
    }
    get clientName () {
        return $(`[class*="fui-DataGridRow"]:nth-of-type(1)>[class*="fui-DataGridCell"]>[class*="fui-TableCellLayout"]>[class*="fui-TableCellLayout__content"]>[class="fui-TableCellLayout__main"]>[class="fui-Persona rlroi9i ___1gusw2c f1iantul"]>[class*="fui-Persona__primaryText"]>[class*="fui-Text"]`);
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
        return $('[class*="fui-DataGridRow"]:nth-of-type(1)>[class*="fui-DataGridCell"]>[class*="fui-TableCellLayout"]>[class*="fui-TableCellLayout__content"]>[class="fui-TableCellLayout__main"]>[class*="fui-Persona"]>[class*="fui-Avatar"]>[class*="fui-Avatar__initials"]');
    }
    async pageCheck () {
        await expect(this.case1Page).toBeDisplayed();
        await expect(this.case1Page).toHaveText(`ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ`);
    }
    async clientCheck () {
        await expect(this.clientIcon).toHaveText("B"); // Confirming the client has an icon with the initials of their name
                
        await expect(this.case1Status).toHaveText("new"); // Checking if the case I am currently testing has a status assigned to it
                
        await expect(this.blankText).toHaveText("big zesty shrek"); // Checking to see what case type is assigned to the case
    }
}
export default new MyCases();
