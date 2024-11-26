import { Page, Locator } from 'playwright';

/**
 * ResultsPage class for interacting with the results page.
 */
export class ResultsPage {
    private page: Page;
    
    // Locators
    public passengerVehicleResultsLink: Locator;
    public truckTrailerResultsLink: Locator;
    public constructionEquipmentResultsLink: Locator;
    public agEquipmentResultsLink: Locator;
    public allItemsResultsLink: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators
        this.passengerVehicleResultsLink = this.page.getByRole('link', { name: ' Passenger Vehicle Results' });
        this.truckTrailerResultsLink = this.page.getByRole('link', { name: ' Truck & Trailer Results' });
        this.constructionEquipmentResultsLink = this.page.getByRole('link', { name: ' Construction Equipment' });
        this.agEquipmentResultsLink = this.page.getByRole('link', { name: ' Ag Equipment Results' });
        this.allItemsResultsLink = this.page.getByRole('link', { name: 'All Items All Item Results' });
        // TODO: add Locators for Recent Auctions lists
        // TODO: add Locators for year and month (2023 and 2024)
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
