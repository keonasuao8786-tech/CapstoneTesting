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
        return $('//span[@class="fui-Text ___c56hd20 fk6fouc fkhj508 f1i3iumi figsok6 fpgzoln f1w7gpdv f6juhto f1gl81tg f2jf649"][contains(text(),"Capstone Test Case")]');
    }
    get case1Page () {
        return $('[value="Capstone Test Case"]');
    }
    get case2 () {
        return $('//span[@class="fui-Text ___c56hd20 fk6fouc fkhj508 f1i3iumi figsok6 fpgzoln f1w7gpdv f6juhto f1gl81tg f2jf649"][contains(text(),"Cat and the Mouse")]');
    }
    get case2Page () {
        return $('[value="Cat and the Mouse"]')
    }
}
export default new MyCases();
