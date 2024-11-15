import { Page, Locator } from 'playwright';


/**
 * AboutPage class for interacting with the about page.
 */
export class AboutPage {
    private page: Page;
    readonly exampleLocator: Locator;
    
    // side menu
    private sideMenuAboutUsLink: Locator;
    private sideMenuStaffLink: Locator;
    private sideMenuTerritoryMapLink: Locator;
    private sideMenuCareersLink: Locator;
    private sideMenuFeedbackLink: Locator;

    // main body
    private aboutUsVideo: Locator;
    private learnMoreAboutSelling: Locator;
    private learnMoreAboutAppraisals: Locator;
    private learnMoreAboutBuying: Locator;

    constructor(page: Page) {
        this.page = page;
        // Example locator using the Playwright locator method
        this.exampleLocator = page.locator('#example-element');
        this.sideMenuAboutUsLink = page.getByRole('link', { name: 'About Us' });
        this.sideMenuStaffLink = page.getByRole('link', { name: 'Staff' });
        this.sideMenuTerritoryMapLink = page.getByRole('link', { name: 'Territory Map' });
        this.sideMenuCareersLink = page.getByRole('link', { name: 'Careers' });
        this.sideMenuFeedbackLink = page.getByRole('link', { name: 'Feedback' });

        // main body
        this.aboutUsVideo = page.locator('#about_us_video');
        this.learnMoreAboutSelling = page.locator('#about_us_sell');
        this.learnMoreAboutAppraisals = page.locator('#about_us_appraise');
        this.learnMoreAboutBuying = page.locator('#about_us_buy');
    
    }

    /**
     * Example method to interact with the example element on the page.
     * @param {string} text - The text to input into the example element.
     */
    async exampleMethod(text: string) {
        await this.exampleLocator.fill(text);  // Use the locator to fill the field
        await this.exampleLocator.click();     // Example action: click the element
    }

    /**
     * Example method to retrieve text from an element.
     * @returns {Promise<string>} - The text content of the example element.
     */
    async getExampleText(): Promise<string> {
        return await this.exampleLocator.textContent();
    }
}
