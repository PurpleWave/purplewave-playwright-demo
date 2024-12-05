import { Page, Locator } from 'playwright';

/**
 * Item View class for handling various tabs, buttons, and interactions for the IMS Item View page
 */
export class ItemViewPage {
    private page: Page;

    // Locators for tabs, buttons, and interactive elements
    public detailsTab: Locator;
    public issuesTab: Locator;
    public listingsTab: Locator;
    public marketingImage: Locator;
    public webOpsNotesLabel: Locator;
    public itemsMessages: Locator;
    public generateWallOfTextButton: Locator;
    public togglePreviewButton: Locator;
    public uploadAdditionalAssetsButton: Locator;
    public smallImagesLabel: Locator;
    public saveFileOrderButton: Locator;
    
    // Details Tab locators
    public assetPromotionCheckbox: Locator;
    public icnLabel: Locator;
    public copartLotNumberLabel: Locator;
    public estHammerLabel: Locator;
    public searchCategoryPlaceholder: Locator;
    public industrySelect: Locator;
    public equipmentTypeSelect: Locator;
    public categorySelect: Locator;
    public customerLabel: Locator;
    public opportunityLabel: Locator;
    public feeCodeSelect: Locator;
    public jobCodeLabel: Locator;
    public govtCodeText: Locator;
    public userDropdownControl: Locator;
    public userDropdownOption: Locator;
    
    // Issues Tab locators
    public issuesCreateIssueButton: Locator;
    public issuesWebOpsText: Locator;
    public issuesFormTab: Locator;
    public issuesAttachmentsTab: Locator;
    public issuesHistoryTab: Locator;
    public issuesCategorySelect: Locator;
    public issuesTypeSelect: Locator;
    public issuesStatusSelect: Locator;
    public issuesDescriptionLabel: Locator;
    public issuesResolutionLabel: Locator;
    public issuesAssignmentGroupSelect: Locator;
    public issuesAssigneeSelect: Locator;
    public issuesNeedsFollowUpCheckbox: Locator;
    public issuesSaveButton: Locator;
    public issuesCancelButton: Locator;


    constructor(page: Page){
        this.page = page;

        // Initialize locators // TODO: Rename this section
        this.detailsTab = this.page.getByRole('tab', { name: 'Details' });
        this.issuesTab = this.page.getByRole('tab', { name: 'Issues (0)' });
        this.listingsTab = this.page.getByRole('tab', { name: 'Listings (0)' });
        this.marketingImage = this.page.getByRole('img', { name: 'Marketing' });
        this.webOpsNotesLabel = this.page.getByLabel('Notes for WebOps');
        this.itemsMessages = this.page.getByPlaceholder('Place each message on a new');
        this.generateWallOfTextButton = this.page.getByRole('button', { name: 'Generate Wall of Text' });
        this.togglePreviewButton = this.page.getByRole('button', { name: 'Toggle Preview' });
        this.uploadAdditionalAssetsButton = this.page.getByRole('button', { name: 'Upload Additional Assets' });
        this.smallImagesLabel = this.page.getByLabel('Small Images');
        this.saveFileOrderButton = this.page.getByRole('button', { name: 'Save File Order' });
        
        // Details Tab locators
        this.assetPromotionCheckbox = this.page.getByLabel('Asset Promotion');
        this.icnLabel = this.page.getByLabel('ICN *');
        this.copartLotNumberLabel = this.page.getByLabel('Copart Lot Number');
        this.estHammerLabel = this.page.getByLabel('Est. Hammer');
        this.searchCategoryPlaceholder = this.page.locator('#categorySearch');
        this.industrySelect = this.page.locator('select[name="industry"]');
        this.equipmentTypeSelect = this.page.locator('select[name="equipmentType"]');
        this.categorySelect = this.page.locator('select[name="category"]');
        this.customerLabel = this.page.getByLabel('Customer');
        this.opportunityLabel = this.page.getByLabel('Opportunity');
        this.feeCodeSelect = this.page.getByLabel('Fee Code');
        this.jobCodeLabel = this.page.locator('#opportunity');
        this.govtCodeText = this.page.locator('#jobCode');
        this.userDropdownControl = this.page.locator('.css-zi9f8o-control > .css-az7euk');  // TODO: look into during highligher testing 
        this.userDropdownOption = this.page.getByText('dayton.mettes', { exact: true });

        // Issues Tab locators
        this.issuesCreateIssueButton = this.page.getByRole('button', { name: 'Create Issue' });
        this.issuesWebOpsText = this.page.getByText('WebOps').first();
        this.issuesFormTab = this.page.getByRole('tab', { name: 'Form' });
        this.issuesAttachmentsTab = this.page.getByRole('tab', { name: 'Attachments' });
        this.issuesHistoryTab = this.page.getByRole('tab', { name: 'History' });
        this.issuesCategorySelect = this.page.getByLabel('Category');
        this.issuesTypeSelect = this.page.getByLabel('Type');
        this.issuesStatusSelect = this.page.getByLabel('Status');
        this.issuesDescriptionLabel = this.page.getByLabel('Description');
        this.issuesResolutionLabel = this.page.getByLabel('Resolution');
        this.issuesAssignmentGroupSelect = this.page.getByLabel('Assignment Group');
        this.issuesAssigneeSelect = this.page.getByLabel('Assignee');
        this.issuesNeedsFollowUpCheckbox = this.page.getByLabel('Needs Follow Up');
        this.issuesSaveButton = this.page.locator('#saveButton');
        this.issuesCancelButton = this.page.locator('#cancelButton');
    }

    /**
     * Method to check and uncheck Small Images
     */
    async toggleSmallImages() {
        await this.smallImagesLabel.check();
        await this.smallImagesLabel.uncheck();
    }

    
}