import { Page, Locator } from 'playwright';

/**
 * Sidedrawer class for handling various tabs, buttons, and interactions for the side drawer component
 */
export class SideDrawerPage {
    private page: Page;

    public openSideDrawerButton: Locator;
    public itemIcnInput: Locator;
    public copyCheckbox: Locator;
    public duplicatedIcnCheckbox: Locator;
    public fileNoteInput: Locator;
    public digitalAssetTypeDropdown: Locator;
    public saveButton: Locator;
    public turnLeftButton: Locator;
    public turnRightButton: Locator;
    public imagePreview: Locator;
    public repPhotoButton: Locator;
    public resetFilesButton: Locator;
    public subCategoryDropdown: Locator;
    public marketingSlider: Locator;
    public doNotExportSlider: Locator;
    public readyForExportSlider: Locator;
    public exportButton: Locator;

    //asset reset confirmation window 
    public assetResetConfirmationWindow: Locator;
    public resetInput: Locator;
    public resetAssetsButton: Locator;
    public cancelButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.openSideDrawerButton = this.page.locator('//div[@class="statusButton"]');
        this.itemIcnInput = this.page.locator('#itemId');
        this.copyCheckbox = this.page.getByLabel('Copy');
        this.duplicatedIcnCheckbox = this.page.getByLabel('Duplicated ICN?');
        this.fileNoteInput = this.page.locator('input[name="description"]');
        this.digitalAssetTypeDropdown = this.page.locator('#imageForm').getByRole('combobox');
        this.saveButton = this.page.locator('#imageForm').getByRole('button', { name: 'Save' });
        this.turnLeftButton = this.page.locator('#imageForm svg').nth(2);
        this.turnRightButton = this.page.locator('#imageForm svg').nth(3);
        this.imagePreview = this.page.getByRole('img', { name: 'preview' });
        this.repPhotoButton = this.page.getByRole('button', { name: 'Rep Photo' });
        this.resetFilesButton = this.page.locator('button[class$="button button-right"]');
        this.subCategoryDropdown = this.page.locator('select[name="subcategory"]');
        this.marketingSlider = this.page.getByLabel('Marketing');
        this.doNotExportSlider = this.page.getByLabel('Do Not Export');
        this.readyForExportSlider = this.page.getByLabel('Ready For Export');
        this.exportButton = this.page.getByRole('button', { name: 'Export' });

        //asset reset confirmation window 
        this.assetResetConfirmationWindow = this.page.getByText('Asset ResetType reset into');
        this.resetInput = this.page.getByPlaceholder('reset');
        this.resetAssetsButton = this.page.getByRole('button', { name: 'Reset Assets' });
        this.cancelButton = this.page.getByRole('button', { name: 'Cancel' });
        
    }
}
