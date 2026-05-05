import { $, expect } from '@wdio/globals'
import Page from './CaseWork.js';

class MyTasks extends Page {
    get addTask () {
        return $(`[class*="fui-Label"]>[class*="fui-Button r1f29ykk"]`);
    }
    get addTaskWindow () {
        return $(`[class="fui-DialogSurface r1u3t6p6 ___r5ph3u0 fw76w1l fvgz9i8 f1c3wz7s"]`);
    }
    get textBox () {
        return $(`[name="text"]`);
    }
    get cancelButton () {
        return $(`[class*="fui-Button"][data-testid="task-dialog-cancel-button"]`);
    }
    get caseDropdown () {
        return $(`//span[@class="fui-Text ___zei06i0 fk6fouc fkhj508 f1i3iumi figsok6 fpgzoln f1w7gpdv f6juhto f1gl81tg f2jf649 fxkbij4"][contains(text(),"Select a Case")]`);
    }
    get listMenu () {
        return $(`[class*="fui-Listbox"]`);
    }
    get optionOne () {
        return $('[role="option"]:nth-of-type(1)');
    }
    get optionTwo () {
        return $('[role="option"]:nth-of-type(2)');
    }
    get caseMenuText () {
        return $(`[class*="fui-Dropdown ___11d5zms"]>[class*="fui-Dropdown__button"]>[class*="___loo0yx0"]>[class*="fui-Text"]`);
    }
    get milestoneMenu () {
        return $(`//span[@class="fui-Text ___zei06i0 fk6fouc fkhj508 f1i3iumi figsok6 fpgzoln f1w7gpdv f6juhto f1gl81tg f2jf649 fxkbij4"][contains(text(),"Select Milestone")]`)
    }
    async failMsg () {
        await this.milestoneMenu.click();
        console.log(`This Case does not have any milestones`);
    }
    async finishTaskCrtn () {
        await this.textBox.setValue(`This is a test task; do NOT delete unless prompted`);
    }
}

export default new MyTasks();
