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
        return $(`[data-testid="milestone-dropdown-menu"]`);
    }
    get dueBy () {
        return $(`[data-testid="task-dialog-dueby-checkbox"]`);
    }
    get dateSelect () {
        return $(`[data-testid="task-dialog-datepicker"]`);
    }
    get calendar () {
        return $(`[class*="fui-CalendarDay ___1tvjfjv"]`);
    }
    get today () {
        return $(`[class*="fui-CalendarDayGrid__dayTodayMarker"]`);
    }
    get dateAdj () {
        return $(`[class*="fui-CalendarDayGrid__dayCell fui-CalendarDayGrid__weekDayLabelCell"]:nth-of-type(1)`);
    }
    get datecolumn1 () {
        return $(`[class*="fui-CalendarDayGrid__weekRow"]>[class*="fui-CalendarDayGrid__bottomRightCornerDate ___1klierx"]:nth-of-type(7)>[class*="fui-CalendarDayGrid__dayButton"]`)
    }
    get saveBtn () {
        return $(`[type="submit"]`)
    }
    get taskOne () {
        return $(`[class*="___1k9q2mx"]:nth-of-type(1)`);
    }
    async failMsg () {
        await this.milestoneMenu.click();
        console.log(`This Case does not have any milestones`);
        await this.cancelButton.click();
    }
    async testDesc () {
        await this.textBox.setValue(this.desc);
    }
    desc = (`This is a test task; do NOT delete unless prompted`);
}

export default new MyTasks();
