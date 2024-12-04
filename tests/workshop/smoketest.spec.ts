import { test, expect } from '@playwright/test';
import { HeaderPage } from '../../pages/fe/Header.page'; // Import the page object model
import { UtilitiesPage } from '../../pages/fe/Utilities.page'; // Import UtilitiesPage

test.describe('Header Menu Visual Regression', () => {
    let headerPage: HeaderPage;
    let utilitiesPage: UtilitiesPage;
    const pixelDiff = 100;

    test.beforeEach(async ({ page }) => {
        // Initialize the page objects before each test
        headerPage = new HeaderPage(page);
        utilitiesPage = new UtilitiesPage(page);
        await page.goto('https://purplewave.com');
    });

    test('Visual Regression for Auctions Menu', { tag: '@smoke' }, async ({ page }) => {
        await headerPage.clickAuctions(); // Click Auctions link
        await page.waitForLoadState(); // Wait for the page to load

        await utilitiesPage.waitForIntercomButtonToBeVisible(); // wait and detect the Intercom button
        await utilitiesPage.hideIntercomIfVisible();    // Hide the Intercom button if visible.

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

    test('Visual Regression for Buy Menu', { tag: '@smoke' }, async ({ page }) => {
        await headerPage.clickBuy(); // Click Buy link
        await page.waitForLoadState(); // Wait for the page to load

        await utilitiesPage.waitForIntercomButtonToBeVisible(); // wait and detect the Intercom button
        await utilitiesPage.hideIntercomIfVisible();    // Hide the Intercom button if visible.

        // Capture and compare screenshot
        await expect(page).toHaveScreenshot('buy.png', {
            mask: [
                page.locator('#buying_banner')
            ],
            timeout: 10000,
            fullPage: true,
            maxDiffPixels: pixelDiff, // Allow small differences
        });
    });

    test('Visual Regression for Sell Menu', { tag: '@smoke' }, async ({ page }) => {
        await headerPage.clickSell(); // Click Sell link
        await page.waitForLoadState(); // Wait for the page to load

        await utilitiesPage.waitForIntercomButtonToBeVisible(); // wait and detect the Intercom button
        await utilitiesPage.hideIntercomIfVisible();    // Hide the Intercom button if visible.

        // Capture and compare screenshot
        await expect(page).toHaveScreenshot('sell.png', {
            timeout: 10000,
            maxDiffPixels: pixelDiff, // Allow small differences
        });
    });

    // Repeat the same pattern for other tests...

    test('Visual Regression for About Menu', { tag: '@smoke' }, async ({ page }) => {
        await headerPage.clickAbout(); // Click About link
        await page.waitForLoadState(); // Wait for the page to load

        await utilitiesPage.waitForIntercomButtonToBeVisible(); // wait and detect the Intercom button
        await utilitiesPage.hideIntercomIfVisible();    // Hide the Intercom button if visible.

        // Capture and compare screenshot
        await expect(page).toHaveScreenshot('about.png', {
            timeout: 10000,
            maxDiffPixels: pixelDiff, // Allow small differences
        });
    });
});
