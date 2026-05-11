import { $ } from '@wdio/globals'
import Page from './CaseWork.js';

class UpCEvents extends Page {
    get eventOne () {
        return $(`[class*="___1k3u5ge"]:nth-of-type(1)`);
    }
    get eTitleOne () {
        return $('[class*="___1k3u5ge"]:first-of-type>[class*="___vjugq20"]>[class*="___pg79c70"]>[class*="fui-Text"]');
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
    get deleteEOne () {
        return $('[class*="___1k3u5ge"]:nth-of-type(1)>[class*="___vjugq20"]>[class*="___1h9lpw9"]>[class*="hidden"]>[aria-label="Delete"]');
    }
    get deleteWindow () {
        return $('[class="fui-DialogSurface r1u3t6p6"]');
    }
    get deleteYes () {
        return $('[data-testid="confirmation-dialog-confirm-button"]');
    }
    get deleteNo () {
        return $('[data-testid="confirmation-dialog-cancel-button"]');
    }
    get editEvent () {
        return $(`[class*="fui-DialogSurface r1u3t6p6"]`);
    }
    get eventDate () {
        return $(`[data-testid="event-date-picker"]`);
    }
    get mayDate () {
        return $(`button[aria-label="16, May, 2026"]`);
    }
    get eventTitle () {
        return $(`[data-testid="event-input"]`);
    }
    get errorMsg () {
        return $(`[role="alert"]>[class*="fui-Field__validationMessageIcon"]`);
    }
    get eventDesc () {
        return $(`[data-testid="event-description-textarea"]`);
    }
    get descHidden () {
        return $(`[class*="___1k3u5ge"]:nth-of-type(1)>[class*="pressed"]`);
    }
    get eventSave () {
        return $(`[data-testid="event-save-button"]`);
    }
    get eventCancel () {
        return $('[data-testid="event-cancel-button"]');
    }
    async titleChange () {
        await this.eventTitle.setValue("Edited Task Version 1")
    }
    async titleChange2 () {
        await this.eventTitle.setValue(this.maxTitle)
    }
    async titleChangeN () {
        await this.eventTitle.setValue("/")
    }
    async titleN2 () {
        await this.eventTitle.setValue(this.maxTitle + "1");
    }
    async descChange () {
        await this.eventDesc.setValue('This event has been edited')
    }
    async descChange2 () {
        await this.eventDesc.clearValue();
        await this.eventDesc.setValue(this.maxText);
    }
    async descBoundary () {
        await this.eventDesc.clearValue();
        await expect(this.eventDesc).not.toHaveValue(this.maxText);
        await this.eventDesc.setValue(this.maxText + "1");
    }
    maxTitle = ('1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890');
    maxText = ('12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890');
}

export default new UpCEvents();
