import { Page, Locator } from 'playwright';
import { DataCapturePage } from './DataCapture.page';

/**
 * Form class for handling various tabs, buttons, and interactions for the form component
 */
export class FormPage extends DataCapturePage{

    public example: Locator;

    constructor(page: Page) {
        super(page)
        this.example = this.page.locator('#');
    }



}
