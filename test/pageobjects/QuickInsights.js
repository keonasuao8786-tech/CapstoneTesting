import { $ } from '@wdio/globals'
import Page from './CaseWork.js';

class QuickInsights extends Page {
    get timeSpan () {
        return $('[data-testid="quick-insights-time-period-menu"]');
    }
    get viewMenu () {
        return $('[data-testid="quick-insights-view-filter-menu"]');
    }
    get bTimeMeter () {
        return $('[role="meter"]');
    }
    get timeInput () {
        return $('[data-testid="add-timeentry-fortask-hours-input"]');
    }
    get timeSubmit () {
        return $('[data-testid="add-timeentry-fortask-submit-button"]');
    }
    async addingTime () {
        await this.timeInput.setValue('5');
    }
}

export default new QuickInsights();
