import { Page, Locator } from 'playwright';
import { DataCapturePage } from './DataCapture.page';

/**
 * Form class for handling various tabs, buttons, and interactions for the form component
 */
export class FormPage extends DataCapturePage{

    public hideFormButton: Locator;
    public viewHistoryButton: Locator;
    public submittedByFullText: Locator;
    public submittedByLabel: Locator;
    public lastUpdatedByLabel: Locator;
    public cancelButton: Locator;
    public saveButton: Locator;
    //
    public addItemToLotButton: Locator;
    public cancelBottomButton: Locator;
    public statusBottomDropdown: Locator;
    public saveBottomDropdown: Locator;

    constructor(page: Page) {
        super(page);
        this.hideFormButton = this.page.getByRole('button', { name: 'Hide Form' });
        this.viewHistoryButton = this.page.getByRole('button', { name: 'View History' });
        this.submittedByLabel = this.page.getByText('Submitted By:');
        this.lastUpdatedByLabel = this.page.getByText('Last Updated By:');
        this.cancelButton = this.page.locator('div').filter({ hasText: /^Cancel$/ });
        this.saveButton = this.page.locator('div').filter({ hasText: /^Save$/ }).nth(1);
        //
        this.addItemToLotButton = this.page.getByRole('button', { name: 'Add Item To Lot' });
        this.cancelBottomButton = this.page.locator('div').filter({ hasText: /^Cancel$/ }).nth(1);
        this.statusBottomDropdown = this.page.locator('select[name="status"]').nth(1);
        this.saveBottomDropdown = this.page.locator('div').filter({ hasText: /^Save$/ }).nth(3);
    }
}