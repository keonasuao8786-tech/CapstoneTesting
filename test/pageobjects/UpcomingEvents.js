import { $ } from '@wdio/globals'
import Page from './CaseWork.js';

class UpCEvents extends Page {
    get eventOne () {
        return $(`[class*="___1k3u5ge"]:nth-of-type(1)`);
    }
    get eventTwo () {
        return $(`[class*="___1k3u5ge"]:nth-of-type(2)`);
    }
    get eventThree () {
        return $(`[class*="___1k3u5ge"]:nth-of-type(3)`);
    }
    get timeSpan () {
        return $(`[data-testid="upcoming-events-filter-dropdown"]`);
    }
    get editEOne () {
        return $(`[class*="___1k3u5ge"]:nth-of-type(1)>[style="min-height: fit-content;"]>[style="scrollbar-width: thin; overflow-x: clip;"]>[style="width: auto; min-height: fit-content;"]>[aria-label="Edit"]>[class="fui-Button__icon rywnvv2"]`);
    }
    get editEvent () {
        return $(`[class*="fui-DialogSurface r1u3t6p6"]`);
    }
}

export default new UpCEvents();
