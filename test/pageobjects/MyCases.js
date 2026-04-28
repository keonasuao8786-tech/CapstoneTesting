import { $ } from '@wdio/globals'
import Page from './CaseWork.js';

class MyCases extends Page {
    get caseType () {
        return $('[class*="___1g9gf5i"]');
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
        return $('[aria-sort ="descending"]')
    }
    get caseColumnType () {
        return $('[role="presentation"]>[class*="fui-TableCellLayout"]');
    }
    get button () {
        return $('role="button"');
    }
}
export default new MyCases();
