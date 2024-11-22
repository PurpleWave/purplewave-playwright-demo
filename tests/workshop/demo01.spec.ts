import { test, expect } from '@playwright/test';
import { HeaderPage } from '../../pages/Header.page'; // Import the page object model
import { UtilitiesPage } from '../../pages/Utilities.page'; // Import UtilitiesPage

test.describe('TEST COLLECTION DESCRIPTION', () => {
    let header: HeaderPage;
    let utilities: UtilitiesPage;

    test.beforeEach(async ({ page }, testInfo ) => {
        // Initialize the page objects before each test
        header = new HeaderPage(page);
        utilities = new UtilitiesPage(page);
        await page.goto('https://qa.cliquidator.info/');

        utilities.addTestMetadata(testInfo, {
            groups: ['beforeEachGroup'],
            issues: ['JIRA-5678']
        });
    });

    test('TEST DESCRIPTION', async ({ page }, testInfo ) => {
        // Test logic goes here
        utilities.addTestMetadata(testInfo, {
            groups: ['testGroup'],
            issues: ['JIRA-1234']
        });

        // Navigate to the target URL
        await page.goto('JIRA-5678');

        // Add test logic here
        // Example: await expect(page).toHaveTitle(/expectedTitle/);}
    });
});