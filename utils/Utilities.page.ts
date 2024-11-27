import { Page, Locator } from 'playwright';

/**
 * UtilitiesPage class providing utility methods for various page interactions.
 */
export class UtilitiesPage {
    private page: Page;

    // FOR NOW: WE WILL ALLOW HARDCODED LOCATORS, BUT THAT MAY CHANGE.

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Highlights all locators in the provided page object by applying an outline with specified color and width.
     * This method iterates over each property in the page object, checking if it is a Playwright Locator.
     * If a property is a Locator, it applies a customizable outline to make it visually distinct.
     * 
     * @param {object} pageObject - An instance of a page object containing locators as properties.
     * @param {string} [color='red'] - The color of the outline. Defaults to 'red' if not provided.
     * @param {string} [width='3px'] - The width of the outline. Defaults to '3px' if not provided.
     * @returns {Promise<void>} A Promise that resolves when all locators are processed.
     */
    public async highlightAllLocators(pageObject: object, color: string = 'red', width: string = '3px'): Promise<void> {
        /**
         * Highlights a single element by setting an outline with the specified color and width.
         * 
         * @param {Locator} locator - The Playwright Locator to highlight.
         */
        const highlightElement = async (locator: Locator) => {
            try {
                await locator.evaluate((element, { color, width }) => {
                    if (element) {
                        (element as HTMLElement).style.outline = `${width} solid ${color}`;
                    }
                }, { color, width });
            } catch (error) {
                console.log(`Could not highlight locator: ${error}`);
            }
        };

        // Iterate over each property in the page object, highlighting if it is a Locator
        for (const key in pageObject) {
            const locator = pageObject[key];
            if (locator && typeof locator.evaluate === 'function') {
                await highlightElement(locator);
            }
        }
    }

    /**
     * Checks if the "Open Intercom Messenger" button is visible, and if so, hides it by setting its visibility to 'hidden'.
     * This method ensures that the Intercom button does not appear in visual comparison screenshots.
     * 
     * @returns {Promise<void>} A Promise that resolves when the visibility is checked and, if visible, the button is hidden.
     */
    public async hideIntercomIfVisible(): Promise<void> {
        const intercomButton = this.page.getByLabel('Open Intercom Messenger');
        
        // Check if the Intercom button is visible
        if (await intercomButton.isVisible()) {
            try {
                await intercomButton.evaluate((button) => {
                    // I'm a bad person for throwing the kitchen sink at it, but it works! - NW
                    (button as HTMLElement).style.visibility = 'hidden';
                    (button as HTMLElement).style.display = 'none';
                });
            } catch (error) {
                console.log(`Could not hide Intercom button: ${error}`);
            }
        }
    }

    /**
     * Waits for the "Open Intercom Messenger" button to be visible on the page.
     * This method checks for the element with aria-label "Open Intercom Messenger" and waits until it becomes visible.
     * 
     * @param {number} [timeout=5000] - The maximum time to wait for the element to be visible, in milliseconds. Defaults to 5000ms.
     * @returns {Promise<void>} A Promise that resolves if the element becomes visible within the specified timeout.
     * Logs a message if the element becomes visible, or logs an error message if it does not appear within the timeout.
     */
    public async waitForIntercomButtonToBeVisible(timeout: number = 5000): Promise<void> {
        try {
            await this.page.waitForSelector('[aria-label="Open Intercom Messenger"]', { state: 'visible', timeout });
            console.log('Intercom button is now visible.');
        } catch (error) {
            console.error(`Intercom button did not become visible within the timeout period of ${timeout}ms.`);
        }
    }
    
    /**
     * Adds metadata to a test, including suite names and issue IDs.
     * This utility dynamically adds annotations to the testInfo object, allowing filtering or reporting based on metadata.
     * 
     * @example
     * // Tags a test as a smoke test, on the auctionPage for 2 JIRA issues
     * addTestMetadata(testInfo, { groups: ['smoke', 'auctionPage'], issues: ['JIRA-1234', 'JIRA-5678'] });
     * 
     * @param {any} testInfo - The testInfo object from Playwright, which provides context for the current test.
     * @param {Object} tags - An object containing arrays of groups and issues.
     * @param {string[]} [tags.groups] - An array of suite group names to associate with the test (e.g., "smoke", "auctionPage").
     * @param {string[]} [tags.issues] - An array of issue IDs to associate with the test (e.g., "JIRA-1234").
     * @returns {void}
     */
    public async addTestMetadata(
        testInfo: any,
        tags: { groups?: string[]; issues?: string[] } = {}
    ): Promise<void> {
        const { groups = [], issues = [] } = tags;

        groups.forEach(group => testInfo.annotations.push({ type: 'group', description: group }));
        issues.forEach(issue => testInfo.annotations.push({ type: 'issue', description: issue }));
    }

    /**
     * Passes the environment username to the test.
     * @return {string} The environment username.
     */
    public environmentUserName(): string {
        return process.env.USERNAME || "defaultuser";
    }

    /**
     * Passes the environment password to the test.
     * @returns {string} A Promise that resolves with the environment password.
     */
    public environmentPassword(): string {
        return process.env.PASSWORD || "defaultuser";
    }

    /**
     * Passes the environment base URL to the test.
     * @returns {string} A Promise that resolves with the environment base URL.
     */
    public environmentBaseUrl():string {
        return process.env.BASE_URL || "https://qa-app.cliquidator.info/";
    }
}