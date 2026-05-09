import { $, expect } from '@wdio/globals'
import Page from './CaseWork.js';

class MyTasks extends Page {
    get filterCase () {
        return $(`[data-testid="tasks-card-case-filter-dropdown"]`);
    }
    get sortCreation () {
        return $(`[data-testid="tasks-card-sort-dropdown"]`);
    }
    get addTask () {
        return $(`[class*="fui-Label"]>[class*="fui-Button r1f29ykk"]`);
    }
    get addTaskWindow () {
        return $(`[class="fui-DialogSurface r1u3t6p6 ___4tvrrt0 fw76w1l fc5govd f19ebcec"]`);
    }
    get detailsTab () {
        return $(`[value="Details"]`);
    }
    get discTab () {
        return $(`[value="Discussion"]`);
    }
    get title () {
        return $(`[name="title"]`);
    }
    get textBox () {
        return $(`[name="text"]`);
    }
    get results () {
        return $(`[name="results"]`);
    }
    get category () {
        return $(`[name="category"]`);
    }
    get estHours () {
        return $(`[name="estimatedHours"]`);
    }
    get caseNote () {
        return $(`[data-testid="case-note-input"]`);
    }
    get cNAddBtn () {
        return $(`[data-testid="case-note-add-button"]`);
    }
    get noteOne () {
        return $(`[class*="___vijv6g0"]:nth-of-type(1)`);
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
    get optionThree () {
        return $('[role="option"]:nth-of-type(3)');
    }
    get milestoneMenu () {
        return $(`[data-testid="milestone-dropdown-menu"]`);
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
    get datecolumn1 () {
        return $(`[class*="fui-CalendarDayGrid__weekRow"]>[class*="fui-CalendarDayGrid__bottomRightCornerDate ___1klierx"]:nth-of-type(7)>[class*="fui-CalendarDayGrid__dayButton"]`)
    }
    get saveBtn () {
        return $(`[type="submit"]`)
    }
    get taskOne () {
        return $(`[class*="___1k9q2mx"]:nth-of-type(1)`);
    }
    get taskTwo () {
        return $(`[class*="___1k9q2mx"]:nth-of-type(2)`);
    }
    get billable () {
        return $(`[type="button"][name="billable"]`);
    }
    get billableF () {
        return $(`[aria-pressed="false"]`);
    }
    get billableT () {
        return $(`[aria-pressed="true"]`);
    }
    get closeBtnA () {
        return $(`[class*="___1k9q2mx"]:nth-of-type(1) [aria-label="Close"]`);
    }
    get closeBtnB () {
        return $(`[class*="___1k9q2mx"]:nth-of-type(2) [aria-label="Close"]`);
    }
    get completeBtnA () {
        return $(`[class*="___1k9q2mx"]:nth-of-type(1) [aria-label="Complete"]`);
    }
    get completeBtnB () {
        return $(`[class*="___1k9q2mx"]:nth-of-type(2) [aria-label="Complete"]`);
    }
    get editBtnA () {
        return $(`[class*="___1k9q2mx"]:nth-of-type(1) [aria-label="Edit"]`);
    }
    get editBtnB () {
        return $(`[class*="___1k9q2mx"]:nth-of-type(2) [aria-label="Edit"]`);
    }
    get editTaskWin () {
        return $(`[class*="fui-DialogSurface r1u3t6p6"]`);
    }
    get startBtnA () {
        return $(`[class*="___1k9q2mx"]:nth-of-type(1) [aria-label="Start Timer"]`);
    }
    get startBtnB () {
        return $(`[class*="___1k9q2mx"]:nth-of-type(2) [aria-label="Start Timer"]`);
    }
    get stopBtnA () {
        return $(`[class*="___1k9q2mx"]:nth-of-type(1) [data-testid="timercontrol-stop-timer-button"]`);
    }
    get stopBtnB () {
        return $(`[class*="___1k9q2mx"]:nth-of-type(2) [data-testid="timercontrol-stop-timer-button"]`);
    }
    get addTimeA () {
        return $(`[class*="___1k9q2mx"]:nth-of-type(1) [aria-label="Add Time"]`);
    }
    get addTimeB() {
        return $(`[class*="___1k9q2mx"]:nth-of-type(2) [aria-label="Add Time"]`);
    }
    get addTimeWindow () {
        return $(`[class="fui-DialogSurface r1u3t6p6"]`);
    }
    get addTimeCancel () {
        return $(`[data-testid="add-timeentry-fortask-cancel-button"]`);
    }
    get popUpNotif () {
        return $(`[class*="fui-Link ___52mpgl0"]`);
    }
    async failMsg () {
        await this.milestoneMenu.click();
        console.log(`This Case does not have any milestones`);
        await this.cancelButton.click();
    }
    async testTitle () {
        await this.addTaskWindow.waitForDisplayed();
        await this.title.waitForStable();
        await this.title.waitForStable();
        await this.title.waitForStable();
        await this.title.setValue(this.titleV);
    }
    async testDesc () {
        await this.textBox.setValue(this.desc);
    }
    async testDesc2 () {
        await this.textBox.setValue(this.desc2);
    }
    async inputFill () {
        await this.category.setValue(this.testCategory);
        await this.estHours.setValue(this.testHours);
    }
    async testResults () {
        await this.results.setValue(this.resultEdit);
    }
    async cNTest () {
        await this.caseNote.setValue(this.noteTest);
    }
    titleV = (`Test Task(Do not delete)`);
    desc = (`This is a test task; do NOT delete unless prompted`);
    desc2 = (`This is a test non-billable task; do NOT delete unless prompted`);
    testCategory = (`Testing`);
    testHours = (`12`);
    resultEdit = (`This test was successful`);
    noteTest = (`The case note test was successful`);

}

export default new MyTasks();
