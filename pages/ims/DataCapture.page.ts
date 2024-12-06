import { Page, Locator } from 'playwright'

export class DataCapturePage {
    protected page: Page;
    
    // New Data Capture Forms
    public preDcCheckbox: Locator;
    public icnInput: Locator;
    public copartLotNumberLabel: Locator;
    public estHammerLabel: Locator;
    public nominationLabel: Locator;
    public webOpsNotesLabel: Locator;
    public assetPromotionCheckbox: Locator;
    public searchCategoryPlaceholder: Locator;
    public industryDropdown: Locator;
    public equipmentTypeDropdown: Locator;
    public categoryDropdown: Locator;

    //header
    public hidePreDcItemsButton: Locator;
    public preDcIcnLabel: Locator;
    public vinSnLabel: Locator;
    public unitNumberLabel: Locator;
    public firstLineDescriptionLabel: Locator;

    // Internal use section 
    public locationDropdown: Locator;
    public customerLabel: Locator;
    public opportunityLabel: Locator;
    public jobCodeLabel: Locator;
    public feeCodeDropdown: Locator;

    //bottom
    public cancelButton: Locator;
    public statusDropdown: Locator;
    public saveAndCloneButton: Locator;
    public addItemToLotButton: Locator;
    public saveButton: Locator;
    //after clicking 'add item to lot' button
    public industryBottomDropdown: Locator;
    public equipmentTypeBottomDropdown: Locator;
    public categoryBottomDropdown: Locator;


    constructor(page: Page) {
        this.page = page;
        this.preDcCheckbox = this.page.getByLabel('Pre-DC');
        this.icnInput = this.page.getByLabel('ICN *');
        this.copartLotNumberLabel = this.page.getByLabel('Copart Lot Number');
        this.searchCategoryPlaceholder = this.page.getByPlaceholder('Search for category');
        this.estHammerLabel = this.page.getByLabel('Est. Hammer');
        this.nominationLabel = this.page.getByLabel('Nomination');
        this.webOpsNotesLabel = this.page.getByLabel('Notes for WebOps');
        this.assetPromotionCheckbox = this.page.getByLabel('Asset Promotion');
        this.industryDropdown = this.page.locator('select[name="industry"]');
        this.equipmentTypeDropdown = this.page.locator('select[name="equipmentType"]');
        this.categoryDropdown = this.page.locator('select[name="category"]');
        
        //header
        this.hidePreDcItemsButton = this.page.getByRole('button', { name: 'Hide Pre-DC Items' });
        this.preDcCheckbox = this.page.getByRole('table').getByRole('textbox').first();
        this.vinSnLabel = this.page.getByRole('table').getByRole('textbox').nth(1);
        this.unitNumberLabel = this.page.getByRole('table').getByRole('textbox').nth(2);
        this.firstLineDescriptionLabel = this.page.getByRole('table').getByRole('textbox').nth(3);

        // Internal use section
        this.locationDropdown = this.page.getByLabel('Location');
        this.customerLabel = this.page.getByLabel('Customer');
        this.opportunityLabel = this.page.getByLabel('Opportunity');
        this.jobCodeLabel = this.page.locator('div').filter({ hasText: /^Job Code$/ }).nth(2);
        this.feeCodeDropdown = this.page.locator('#fee_code');

        //bottom
        this.cancelButton = this.page.getByRole('button', { name: 'Cancel' });
        this.statusDropdown = this.page.locator('select[name="status"]');
        this.saveAndCloneButton = this.page.locator('div').filter({ hasText: /^Save and Clone$/ });
        this.addItemToLotButton = this.page.getByRole('button', { name: 'Add Item To Lot' });
        this.saveAndCloneButton = this.page.locator('div').filter({ hasText: /^Save$/ });
        //after clicking 'add item to lot' button
        this.industryBottomDropdown = this.page.locator('select[name="attachment\\.industry"]');
        this.equipmentTypeBottomDropdown = this.page.locator('select[name="attachment\\.equipmentType"]');
        this.categoryBottomDropdown = this.page.locator('select[name="attachment\\.category"]');
    }
}