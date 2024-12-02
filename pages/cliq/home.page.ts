import { Page, Locator } from 'playwright';

/**
 * Homepage class for handling homepage elements - TODO: GROSS, no duh - anything better to put in here?
 */

export class homePage {
    private page: Page;
    // Header
    public searchPlaceholder: Locator;
    public openNavigationButton: Locator;

    // Side Menu Navigation
    public commandCenterButton: Locator;
    public dataCaptureButton: Locator;
    public imageQueueButton: Locator;
    public titlesQueueButton: Locator;
    public imageEditorButton: Locator;
    public videoEditorButton: Locator;
    public documentEditorButton: Locator;
    public submissionsButton: Locator;
    public itemListButton: Locator;
    public groupAdministrationButton: Locator;
    public formBuilderButton: Locator;
    public firstLineEditButton: Locator;
    public cliquidatorButton: Locator;

    // Filter components
    public startDataCaptureButton: Locator;
    public viewFilteredItemsLink: Locator;
    public getOfflineFormsButton: Locator;
    public statusDropdown: Locator;
    public customerInput: Locator;
    public auctionDropdown: Locator;
    public createdByDropdown: Locator;
    public companyInput: Locator;
    public dateFromInput: Locator;
    public dateToInput: Locator;
    public nominationDropdown: Locator;     // TODO: Reserach how to choose options EASILY
    public titleIncludedCheckBox: Locator;
    public titleStatusDropdown: Locator;
    public predcItemsCheckBox: Locator;
    public filterButton: Locator;
    
    contructor(page: Page){
        this.page = page;
        // TODO: Confirm all buttons via HIGHLIGHTING
        
        // Header
        this.searchPlaceholder = this.page.getByPlaceholder('Search');
        this.openNavigationButton = this.page.getByLabel('open navigation');

        // Side Menu Navigation
        this.commandCenterButton = this.page.getByRole('button', { name: 'Command Center' });
        this.dataCaptureButton = this.page.getByRole('button', { name: 'Data Capture', exact: true });
        this.imageQueueButton = this.page.getByRole('button', { name: 'Image Queue' });
        this.titlesQueueButton = this.page.getByRole('button', { name: 'Titles Queue' });
        this.imageEditorButton = this.page.getByRole('button', { name: 'Image Editor' });
        this.videoEditorButton = this.page.getByRole('button', { name: 'Video Editor' });
        this.documentEditorButton = this.page.getByRole('button', { name: 'Document Editor' });
        this.submissionsButton = this.page.getByRole('button', { name: 'Submissions' });
        this.itemListButton = this.page.getByRole('button', { name: 'Item List' });
        this.groupAdministrationButton = this.page.getByRole('button', { name: 'Group Administration' });
        this.formBuilderButton = this.page.getByRole('button', { name: 'Form Builder' });
        this.firstLineEditButton = this.page.getByRole('button', { name: 'First Line Edit' });
        this.cliquidatorButton = this.page.getByRole('button', { name: 'Cliq-icon Cliquidator' });
    
        // Filter components
         // Initialize locators using CSS selectors with ID
        this.startDataCaptureButton = this.page.getByRole('button', { name: 'Start Data Capture' });
        this.viewFilteredItemsLink = this.page.getByRole('link', { name: 'View Filtered Items' });
        this.getOfflineFormsButton = this.page.getByRole('button', { name: 'Get Offline Forms' });
        this.statusDropdown = this.page.locator('#status');
        this.customerInput = this.page.locator('#customer');
        this.auctionDropdown = this.page.locator('#auction');
        this.createdByDropdown = this.page.locator('#created\\ by');
        this.companyInput = this.page.locator('#company');
        this.dateFromInput = this.page.locator('#date_from');
        this.dateToInput = this.page.locator('#date_to');
        this.nominationDropdown = this.page.locator('#nomination');
        this.titleIncludedCheckBox = this.page.locator('#title_included');
        this.titleStatusDropdown = this.page.locator('#title_status');
        this.predcItemsCheckBox = this.page.locator('#predc_items');
        this.filterButton = this.page.locator('#filter_button');
    }


/**
 * Class methods
 */
}