import { Page, Locator } from 'playwright';

/**
 * SellPage class for interacting with the sell page.
 */
export class SellPage{
    private page: Page;
    
    readonly exampleLocator: Locator;

    constructor(page: Page) {
        this.page = page;

        // Example locator using the Playwright locator method
        this.exampleLocator = page.locator('#example-element');
    }

    // /**
    // * Example method to interact with the example element on the page.
    // * @param {string} text - The text to input into the example element.
    // */
    // async exampleMethod(text: string) {
    //     await this.exampleLocator.fill(text);  // Use the locator to fill the field
    //     await this.exampleLocator.click();     // Example action: click the element
    // }

    // /**
    // * Example method to retrieve text from an element.
    // * @returns {Promise<string>} - The text content of the example element.
    // */
    // async getExampleText(): Promise<string> {
    //     return await this.exampleLocator.textContent();
    // }
}