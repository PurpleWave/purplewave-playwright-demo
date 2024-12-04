import { Page, Locator } from 'playwright';

/**
 * ShippingPage class for interacting with the shipping page.
 */
export class ShippingPage {
    private page: Page;

    readonly exampleLocator: Locator;

    /**
     * Creates a new instance of the ShippingPage class.
     * @param page - The Playwright page object.
     */
    constructor(page: Page) {
        this.page = page;
        
        // Example locator using the Playwright locator method
        this.exampleLocator = page.locator('#example-element');
    }
    
}
