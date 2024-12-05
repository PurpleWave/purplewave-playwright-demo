import { Page, Locator } from 'playwright';

/**
 * UtilitiesPage class providing utility methods for various page interactions.
 */
export class GlobalUtilitiesPage {
    public page: Page;

    /**
     * Creates a new instance of the GlobalUtilitiesPage class.
     * @param page - The Playwright page object.
     */
    constructor(page: Page) {
        this.page = page;
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