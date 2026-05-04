import { $, expect } from '@wdio/globals'
import Page from './CaseWork.js';

class MyTasks extends Page {
    get addTask () {
        return $(`[class*="fui-Label"]>[class*="fui-Button r1f29ykk"]`);
    }
    get addTaskWindow () {
        return $(`[class="fui-DialogSurface r1u3t6p6 ___r5ph3u0 fw76w1l fvgz9i8 f1c3wz7s"]`);
    }
    get cancelButton () {
        return $(`[class*="fui-Button"][data-testid="task-dialog-cancel-button"]`);
    }
    get caseDropdown () {
        return $(`[class*="fui-Dropdown ___1emhu78"]>[class*="fui-Dropdown__button"]`);
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
}

export default new MyTasks();
