import { Page, Locator } from 'playwright';

/**
 * LoginPage class for interacting with the login page.
 */
export class LoginPage {
  private page : Page;

  // Locators are added as class properties
  public registerHere: Locator;

    constructor(page: Page) {
        this.page = page;

        // This is where you initialize the locators
        this.registerHere = this.page.locator('role=link[name="Register here."]');
    }
}
