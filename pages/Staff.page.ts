import { Page, Locator } from 'playwright';

/**
 * StaffPage class for interacting with the staff page.
 */
export class StaffPage {
    private page: Page;
    readonly exampleLocator: Locator;

    // side menu
    private sideMenuAboutUsLink: Locator;
    private sideMenuStaffLink: Locator;
    private sideMenuTerritoryMapLink: Locator;
    private sideMenuCareersLink: Locator;
    private sideMenuFeedbackLink: Locator;

    // main body
    private staffDirectory: Locator;
    private searchStaffField: Locator;

    constructor(page: Page) {
        this.page = page;
        // Example locator
        this.exampleLocator = page.locator('#example-element');
        this.sideMenuAboutUsLink = page.getByRole('link', { name: 'About Us' });
        this.sideMenuStaffLink = page.getByRole('link', { name: 'Staff' });
        this.sideMenuTerritoryMapLink = page.getByRole('link', { name: 'Territory Map' });
        this.sideMenuCareersLink = page.getByRole('link', { name: 'Careers' });
        this.sideMenuFeedbackLink = page.getByRole('link', { name: 'Feedback' });

        // main body
        this.staffDirectory = page.locator('#staff_directory');
        this.searchStaffField = page.locator('#search_staff');
    }

    /**
     * Method to search for a staff member.
     * @param {string} name - The name of the staff member.
     */
    async searchStaff(name: string) {
        await this.searchStaffField.fill(name);
        await this.searchStaffField.press('Enter');
    }
}
