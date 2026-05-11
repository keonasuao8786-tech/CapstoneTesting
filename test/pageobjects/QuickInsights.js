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
}

export default new QuickInsights();
