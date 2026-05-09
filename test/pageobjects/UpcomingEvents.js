import { $ } from '@wdio/globals'
import Page from './CaseWork.js';

class UpCEvents extends Page {
    get eventOne () {
        return $(`[class*="___1k3u5ge"]:nth-of-type(1)`);
    }
    get timeSpan () {
        return $(`[data-testid="upcoming-events-filter-dropdown"]`);
    }
}

export default new UpCEvents();
