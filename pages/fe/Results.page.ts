import { Page, Locator } from 'playwright';

/**
 * ResultsPage class for interacting with the results page.
 */
export class ResultsPage {
    private page: Page;
    
    // Declare locators
    public passengerVehicleResultsLink: Locator;
    public truckTrailerResultsLink: Locator;
    public constructionEquipmentResultsLink: Locator;
    public agEquipmentResultsLink: Locator;
    public allItemsResultsLink: Locator;

    /**
     * Creates a new instance of the ResultsPage class.
     * @param page - The Playwright page object.
     */
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

}
