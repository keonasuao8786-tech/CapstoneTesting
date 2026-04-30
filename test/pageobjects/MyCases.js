import { $ } from '@wdio/globals'
import Page from './CaseWork.js';

class MyCases extends Page {
    get caseType () {
        return $('[role="columnheader"]>[class*="___1g9gf5i"]');
    }
    get searchInput () {
        return $('[class*="fui-Input__input"]');
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
        return $(`//span[@class="fui-Text ___c56hd20 fk6fouc fkhj508 f1i3iumi figsok6 fpgzoln f1w7gpdv f6juhto f1gl81tg f2jf649"][contains(text(),"Z no touchy please Don't delete")]`);
    }
    get case1Page () {
        return $(`[value="Z no touchy please Don't delete"]`);
    }
    get blankCell1 () {
        return $('[role="row"]:nth-of-type(1)>[role="gridcell"]:nth-of-type(2)');
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
        return $('[class*="fui-DataGridRow"]:first-of-type>[class*="fui-DataGridCell"]>[class*="fui-TableCellLayout"]>[class*="fui-TableCellLayout__content"]>[class="fui-TableCellLayout__main"]>[class*="fui-Persona rlroi9i"]>[class*="fui-Avatar"]>[class="fui-Avatar__initials rip04v ___1o5zahd fnnb6wn f1n057jc"]')
    }
}
export default new MyCases();
