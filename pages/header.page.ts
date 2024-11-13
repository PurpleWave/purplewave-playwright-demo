import { Page, Locator } from 'playwright';

/**
 * HeaderPage class for interacting with the header page.
 */
export class HeaderPage {
    private page: Page;

    public loginOrRegister: Locator;
    // Locators for links
    public auctionsLink: Locator;
    public buyLink: Locator;
    public sellLink: Locator;
    public resultsLink: Locator;
    public equipmentText: Locator;
    public appraisalsLink: Locator;
    public shippingLink: Locator;
    public aboutLink: Locator;

    constructor(page: Page) {
        this.page = page;

        this.loginOrRegister = this.page.locator('role=button[name="Login or Register"]');

        // Initialize locators for each menu item
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
     * Click the given link text.
     * @param linkText Text of the link to be clicked
     */
    public async clickLink(linkText: string): Promise<void> {
        const link = this.page.locator(`role=link[name="${linkText}"]`);
        await link.click();
    }

    /**
     * Click the "Auctions" link
     */
    public async clickAuctions(): Promise<void> {
        await this.auctionsLink.click();
    }

    /**
     * Click the "Buy" link
     */
    public async clickBuy(): Promise<void> {
        await this.buyLink.click();
    }

    /**
     * Click the "Sell" link
     */
    public async clickSell(): Promise<void> {
        await this.sellLink.click();
    }

    /**
     * Click the "Results" link
     */
    public async clickResults(): Promise<void> {
        await this.resultsLink.click();
    }

    /**
     * Click the "Equipment" text
     */
    public async clickEquipment(): Promise<void> {
        await this.equipmentText.click();
    }

    /**
     * Click the "Appraisals" link
     */
    public async clickAppraisals(): Promise<void> {
        await this.appraisalsLink.click();
    }

    /**
     * Click the "Shipping" link
     */
    public async clickShipping(): Promise<void> {
        await this.shippingLink.click();
    }

    /**
     * Click the "About" link
     */
    public async clickAbout(): Promise<void> {
        await this.aboutLink.click();
    }
}
