import { Page, Locator } from 'playwright';

/**
 * LoginPage class for interacting with the login page.
 */
export class LoginPage {
    private page : Page;

    // Declare locators
    public registerHere: Locator;
    public emailInput: Locator;
    public passwordInput: Locator;
    public loginButton: Locator;

    /**
     * Creates a new instance of the LoginPage class.
     * @param page - The Playwright page object.
     */
    constructor(page: Page) {
        this.page = page;

        // Initialize locators
        this.registerHere = this.page.locator('role=link[name="Register here."]');
        this.emailInput = this.page.getByLabel('Email or Account Id');
        this.passwordInput = this.page.getByLabel('Password', { exact: true });
        this.loginButton = this.page.getByRole('button', { name: 'Login', exact: true });
    }
}