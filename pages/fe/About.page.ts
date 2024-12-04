import { Page, Locator } from 'playwright';

/**
 * AboutPage class for interacting with the about page.
 */
export class AboutPage {
    private page: Page;
    
    // Declare locators
    // Side Menu
    private sideMenuAboutUsLink: Locator;
    private sideMenuStaffLink: Locator;
    private sideMenuTerritoryMapLink: Locator;
    private sideMenuCareersLink: Locator;
    private sideMenuFeedbackLink: Locator;

    // Main Body
    private aboutUsVideo: Locator;
    private learnMoreAboutSelling: Locator;
    private learnMoreAboutAppraisals: Locator;
    private learnMoreAboutBuying: Locator;

    /**
     * Creates a new instance of the AboutPage class.
     * @param page - The Playwright page object.
     */
    constructor(page: Page) {
        this.page = page;

        // Initialize locators
        // Side Menu locators
        this.sideMenuAboutUsLink = page.getByRole('link', { name: 'About Us' });
        this.sideMenuStaffLink = page.getByRole('link', { name: 'Staff' });
        this.sideMenuTerritoryMapLink = page.getByRole('link', { name: 'Territory Map' });
        this.sideMenuCareersLink = page.getByRole('link', { name: 'Careers' });
        this.sideMenuFeedbackLink = page.getByRole('link', { name: 'Feedback' });

        // Main Body locators
        this.aboutUsVideo = page.locator('#about_us_video');    // TODO: GROSS
        this.learnMoreAboutSelling = page.locator('#about_us_sell');    // TODO: GROSS
        this.learnMoreAboutAppraisals = page.locator('#about_us_appraise'); // TODO: GROSS
        this.learnMoreAboutBuying = page.locator('#about_us_buy');  // TODO: GROSS
    
    }
}