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
    get caseColumnType () {
        return $('[role="presentation"]>[class*="fui-TableCellLayout"]');
    }
    get case1 () {
        return $(`//span[@class="fui-Text ___c56hd20 fk6fouc fkhj508 f1i3iumi figsok6 fpgzoln f1w7gpdv f6juhto f1gl81tg f2jf649"][contains(text(),"ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ")]`);
    }
    get case2 () {
        return $(`//span[@class="fui-Text ___c56hd20 fk6fouc fkhj508 f1i3iumi figsok6 fpgzoln f1w7gpdv f6juhto f1gl81tg f2jf649"][contains(text(),"Z no touchy please Don't delete")]`)
    }
    get case1Page () {
        return $(`[class*="fui-Title2"]`);
    }
    get blankCell1 () {
        return $('[role="row"]:nth-of-type(1)>[role="gridcell"]:nth-of-type(2)');
    }
    get blankText () {
        return $(`[class*="fui-DataGridRow"]:first-of-type>[class*="fui-DataGridCell"]>[class="fui-TableCellLayout ___1mzifb9 f22iagw f122n59 faqewft f1izfyrr f1aehjj5 f1xqy1su f1a3p1vp f1cmbuwj fz5stix"]>[class*="fui-TableCellLayout__content"]>[class="fui-TableCellLayout__main"]>[class*="fui-Text"]`)
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
        return $('[class*="fui-DataGridRow"]:nth-of-type(1)>[class*="fui-DataGridCell"]:nth-of-type(4) [class*="fui-Text"]')
    }
    get clientIcon () {
        return $('[class*="fui-DataGridRow"]:nth-of-type(1)>[class*="fui-DataGridCell"]>[class*="fui-TableCellLayout"]>[class*="fui-TableCellLayout__content"]>[class="fui-TableCellLayout__main"]>[class*="fui-Persona"]>[class*="fui-Avatar"]>[class*="fui-Avatar__initials"]')
    }
    async pageCheck () {
        await expect(this.case1Page).toBeDisplayed();
        await expect(this.case1Page).toHaveText(`ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ`);
    }
}
export default new MyCases();
