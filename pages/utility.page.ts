/**
 * UtilityPage class that provides common page interactions and helpers.
 * This class should be extended by other page objects.
 */
export class UtilityPage {
  readonly page;

  constructor(page) {
    this.page = page;
  }

  /**
   * Navigates to a given URL.
   * @param {string} url - The URL to navigate to.
   */
  async navigateTo(url) {
    await this.page.goto(url);
  }

  /**
   * Waits for the page to load.
   */
  async waitForLoadState() {
    await this.page.waitForLoadState('load');
  }
}
