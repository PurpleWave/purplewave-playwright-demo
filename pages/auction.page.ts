import { Page, Locator } from 'playwright';
import { UtilityPage } from './utility.page';

/**
 * AuctionPage class for interacting with the auction page.
 */
export class AuctionPage extends UtilityPage {
    readonly exampleLocator: Locator;
    public agEquipLink: Locator; // New locator
    public truckTrailerLink: Locator; // New locator
    public passengerLink: Locator; // New locator
    public viewAllUpcomingItemsLink: Locator; // New locator
    public logInLink: Locator; // New locator
    public registerLink: Locator; // New locator
    public constLink: Locator; // New locator

    constructor(page: Page) {
        super(page);
        // Example locator using the Playwright locator method
        this.exampleLocator = page.locator('#example-element');
        this.constLink = this.page.locator('role=link[name*="Const."]'); // Using "name contains" for partial match
        this.agEquipLink = this.page.locator('role=link[name*="Ag Equip."]'); // Using "name contains" for partial match
        this.truckTrailerLink = this.page.locator('role=link[name*="Truck/Trailer"]'); // Using "name contains" for partial match
        this.passengerLink = this.page.locator('role=link[name*="Passenger"]'); // Using "name contains" for partial match
    }

  /**
   * Example method to interact with the example element on the page.
   * @param {string} text - The text to input into the example element.
   */
    async exampleMethod(text: string) {
        await this.exampleLocator.fill(text);  // Use the locator to fill the field
        await this.exampleLocator.click();     // Example action: click the element
    }
}
