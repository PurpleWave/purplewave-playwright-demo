import { Page, Locator } from 'playwright'

export class DataCapturePage {
    private page: Page;
    
    // New Data Capture Forms
    public preDcCheckbox: Locator;
    public icnInput: Locator;
    public copartLotNumberLabel: Locator;
    public estHammerLabel: Locator;
    public nominationLabel: Locator;
    public webOpsNotesLabel: Locator;

    public searchCategoryPlaceholder: Locator;
    // Internal use section 
    public customerLabel: Locator;
    public opportunityLabel: Locator;
    public jobCodeLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.preDcCheckbox = this.page.getByLabel('Pre-DC');
        this.icnInput = this.page.getByLabel('ICN *');
        this.copartLotNumberLabel = this.page.getByLabel('Copart Lot Number');
        this.searchCategoryPlaceholder = this.page.getByPlaceholder('Search for category');
        this.estHammerLabel = this.page.getByLabel('Est. Hammer');
        this.nominationLabel = this.page.getByLabel('Nomination');
        this.webOpsNotesLabel = this.page.getByLabel('Notes for WebOps');
        
        // Internal use section
        this.customerLabel = this.page.getByLabel('Customer');
        this.opportunityLabel = this.page.getByLabel('Opportunity');
        this.jobCodeLabel = this.page.locator('div').filter({ hasText: /^Job Code$/ }).nth(2);

    }
}