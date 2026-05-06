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
        return $(`[data-testid="case-filter-menu"]`);
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
        return $(`[data-testid="milestone-dropdown-menu"]`)
    }
    get dueBy () {
        return $(`[data-testid="task-dialog-dueby-checkbox"]`);
    }
    get dateSelect () {
        return $(`[id="datePicker-inputr21e"]`);
    }
}

export default new MyTasks();
