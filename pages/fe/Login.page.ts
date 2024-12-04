import { Page, Locator } from 'playwright';

/**
 * LoginPage class for interacting with the login page.
 */
export class LoginPage {
    private page : Page;

    // Declare locators
    public registerHere: Locator;

    /**
     * Creates a new instance of the LoginPage class.
     * @param page - The Playwright page object.
     */
    constructor(page: Page) {
        this.page = page;

        // Initialize locators
        this.registerHere = this.page.locator('role=link[name="Register here."]');
    }
}