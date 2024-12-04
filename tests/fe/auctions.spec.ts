import { test, expect } from '@playwright/test';
import { NavigationPage } from '../../pages/fe/Navigation.page';
import { UtilitiesPage } from '../../pages/fe/Utilities.page';

test.describe('Core Smoke Test', () => {
    let navigate: NavigationPage;
    let utilities: UtilitiesPage;

    test.beforeEach(async ({ page }, testInfo ) => {

        // Initialize the page objects before each test
        navigate = new NavigationPage(page);
        utilities = new UtilitiesPage(page);

        utilities.addTestMetadata(testInfo, {
            groups: ['CoreSmoke'],
            issues: ['']
        });

        await page.goto('/');
        await page.waitForLoadState();
    });

    test('TEST DESCRIPTION', async ({ page }, testInfo ) => {
        // Test logic goes here
        utilities.addTestMetadata(testInfo, {
            groups: [''],
            issues: ['']
        });


        // Add test logic here
        // Example: await expect(page).toHaveTitle(/expectedTitle/);}
    });
});