import { Page, Locator } from 'playwright';
import { UtilitiesPage } from './utilities.page';

/**
 * AuctionPage class for interacting with the auction page.
 */
export class AuctionPage {
    private page: Page;
    //readonly exampleLocator: Locator;
    // Top to bottom
    public mainCalendarBanner: Locator;
    // Left side bar locators
    public constLink: Locator; // New locator
    public agEquipLink: Locator; // New locator
    public truckTrailerLink: Locator; // New locator
    public passengerLink: Locator; // New locator
    public viewAllUpcomingItemsLink: Locator; // New locator
    public logInLink: Locator; // New locator
    public registerLink: Locator; // New locator
    public testLocator: Locator;
    constructor(page: Page) {
        this.page = page;

        // Example locator using the Playwright locator method
        //this.exampleLocator = page.locator('#example-element');     // TODO: GROSS
        // Top to bottom
        this.mainCalendarBanner = this.page.locator('#calendar-banner')     // TODO: GROSS
        // Left side bar locators
        this.constLink = this.page.getByRole('link', { name: /Const\./ }); // Using "name contains" for partial match
        this.agEquipLink = this.page.getByRole('link', { name: /Ag Equip\./ }); // Using "name contains" for partial match
        this.truckTrailerLink = this.page.getByRole('link', { name: /Truck\/Trailer/ }); // Using "name contains" for partial match
        this.passengerLink = this.page.getByRole('link', { name: /Passenger/ }); // Using "name contains" for partial match
        this.viewAllUpcomingItemsLink = this.page.getByRole('link', { name: 'View ALL Upcoming Items' });
        this.logInLink = this.page.getByRole('link', { name: 'Log In' });
        this.registerLink = this.page.getByRole('link', { name: 'Register' });


        // Test locator
        this.testLocator = this.page.getByRole('link', { name: 'View ALL Upcoming Items' })

    }

}
