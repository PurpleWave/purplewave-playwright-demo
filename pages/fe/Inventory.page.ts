import {Locator, Page} from 'playwright';

export class InventoryPage {
    protected page: Page;


    // Top Banner
    public heroImage: Locator;
    public h1Title: Locator;
    public description: Locator;
    public registerButton: Locator;

    // Breadcrumbs
    public homeBreadcrumb: Locator;
    public inventoryBreadcrumb: Locator;

    // Controls
    public sortByDropdown: Locator;
    public itemsPerPageDropdown: Locator;

    // Filters
    public auctionDateAccordion: Locator;
    public zipRadiusAccordion: Locator;
    public makeAccordion: Locator;
    public yearAccordion: Locator;
    public stateAccordion: Locator;
    public cityAccordion: Locator;
    public currentBidAccordion: Locator;

    // No items found message
    public noItemsFoundMessage: Locator;

    // Recommendations
    public recommendedForYouText: Locator;
    public recommendedItem: Locator;

    constructor(page: Page) {
        this.page = page;

        this.heroImage = page.locator('img[alt="Hero Image"]');
        this.h1Title = page.locator('h1');
        this.description = page.locator('//p[contains(@class, \'mui-sg99o7\')]');
        this.registerButton = page.getByRole('link', {name: 'Register Now!'});
        this.sortByDropdown = page.getByRole('combobox').nth(1);
        // this.sortByDropdown = page.getByText('Current Bid (9-0)').nth(1);
        this.itemsPerPageDropdown = page.getByText('50 / page').nth(1);

        this.homeBreadcrumb = page.getByRole('link', {name: 'Purple Wave Auction'});

        // TODO: Improve this locator
        this.inventoryBreadcrumb = page.locator('html > body > main > div > nav > ol > li:nth-of-type(3) > a');

        this.auctionDateAccordion = page.getByText("Auction Date", {exact: true});
        this.zipRadiusAccordion = page.getByText("Zip Radius");
        // TODO: Logic for ignoring make accordion for make specific pages
       // this.makeAccordion = page.getByText('Make', {exact: true})
        // TODO: Logic for ignoring year accordion when year is not applicable to the inventory
       // this.yearAccordion = page.getByText("Year", {exact: true});
        // TODO: Logic for ignoring state accordion for state specific pages
        // this.stateAccordion = page.getByText("State", {exact: true});
        this.cityAccordion = page.getByText("City", {exact: true});
        // TODO: Improve this locator
        this.currentBidAccordion = page.locator('div').filter({ hasText: /^Current Bid$/ })
        this.noItemsFoundMessage = page.getByText("No items found");

        this.recommendedForYouText = page.getByText("Recommended For You");
        this.recommendedItem = page.locator('.swiper-slide').first();
    }
}
