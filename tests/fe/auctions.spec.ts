import { test, expect } from '@playwright/test';
import { NavigationPage } from '../../pages/fe/Navigation.page';
import { UtilitiesPage } from '../../pages/fe/Utilities.page';

test.describe('Auction Page Core Smoke Test', () => {
    let navigate: NavigationPage;
    let utilities: UtilitiesPage;
    const pixelDiff = 100;
    
    test.beforeEach(async ({ page }, testInfo ) => {

        // Initialize the page objects before each test
        navigate = new NavigationPage(page);
        utilities = new UtilitiesPage(page);

        utilities.addTestMetadata(testInfo, {
            groups: ['CoreSmoke']
        });

        await page.goto('/');
        await page.waitForLoadState();
    });

    test.only('compare screen captures', async ({ page }, testInfo ) => {
        // Test logic goes here
        utilities.addTestMetadata(testInfo, {
            groups: ['']
        });
        // Add test logic here
        // Example: await expect(page).toHaveTitle(/expectedTitle/);}
        await utilities.waitForIntercomButtonToBeVisible();
        await utilities.hideIntercomIfVisible();

        // Capture and compare screenshot
        await expect(page).toHaveScreenshot('auctions.png', {
            timeout: 10000,
            mask: [
                page.locator('#calendar-banner'),
                page.locator("//*[contains(@class, 'panel-title')]"),
                page.locator("//*[contains(@class, 'caroufredsel_wrapper')]"), // TODO: GROSS OLD HABITS
                page.locator('#hpa')
            ],
            fullPage: true,
            maxDiffPixels: pixelDiff, // Allow small differences
        });
    });
});