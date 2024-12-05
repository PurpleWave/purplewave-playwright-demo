import { Page, Locator } from 'playwright';

/**
 * HeaderPage class for interacting with the header page.
 */
export class HeaderPage {
    private page: Page;
    // Declare locators

    // Header locators
    public loginOrRegister: Locator;
    public contactUsLink: Locator;
    public allItemsLink: Locator;
    public shoppingCartWrapper: Locator;
    public recommendationsLabel: Locator;
    public savedSearchesLabel: Locator;
    public searchItemsInput: Locator;
    public searchSubmitButton: Locator;
    
    // Locators for menu links
    public homeLogo: Locator;
    public auctionsLink: Locator;
    public buyLink: Locator;
    public sellLink: Locator;
    public resultsLink: Locator;
    public equipmentText: Locator;
    public appraisalsLink: Locator;
    public shippingLink: Locator;
    public aboutLink: Locator;  

    /**
     * Creates a new instance of the HeaderPage class.
     * @param page - The Playwright page object.
     */
    constructor(page: Page) {
        this.page = page;

        // Initialize locators
        this.loginOrRegister = this.page.locator('role=button[name="Login or Register"]');
        this.contactUsLink = this.page.locator('role=link[name="Contact Us"]');

        // Initialize locators for each menu item
        this.homeLogo = this.page.locator('#header_logo');  // TODO: GROSS
        this.auctionsLink = this.page.locator('role=link[name="Auctions"]');
        this.buyLink = this.page.locator('role=link[name="Buy"]');
        this.sellLink = this.page.locator('role=link[name="Sell"]');
        this.resultsLink = this.page.locator('role=link[name="Results"]');
        this.equipmentText = this.page.locator('text=Equipment');
        this.appraisalsLink = this.page.locator('role=link[name="Appraisals"]');
        this.shippingLink = this.page.locator('role=link[name="Shipping"]');
        this.aboutLink = this.page.locator('role=link[name="About"]');
    }

    /**
     * Experimental method to click a link by its text.
     * @param linkText Text of the link to be clicked
     */
    public async clickLink(linkText: string): Promise<void> {
        const link = this.page.locator(`role=link[name="${linkText}"]`);
        await link.click();
    }
}
