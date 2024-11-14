import { test, expect } from '@playwright/test';
import { HeaderPage } from '../../pages/header.page'; // Import the page object model

test.describe('Header Menu Visual Regression', () => {
    let headerPage: HeaderPage;
    const pixelDiff = 100;

    test.beforeEach(async ({ page }) => {
        // Initialize the page object before each test
        headerPage = new HeaderPage(page);
        await page.goto('https://purplewave.com');
});

    test('Visual Regression for Auctions Menu', { tag: '@smoke' }, async ({ page }) => {
        await headerPage.clickAuctions(); // Click Auctions link
        await page.waitForLoadState() // the promise resolves after "load" event.
        await expect(page)
            .toHaveScreenshot('auctions.png', {
                mask: [
                    page.locator('#calendar-banner'),
                    page.locator("//*[contains (@class, 'caroufredsel_wrapper')]"),     // TODO: GROSS OLD HABITS
                    page.locator('#hpa')
                ],
                fullPage: true,
                maxDiffPixels: pixelDiff, // Allow small differences
        });
    });

    test('Visual Regression for Buy Menu', {
        tag: '@smoke' }, async ({ page }) => {
        await headerPage.clickBuy(); // Click Buy link
        await page.waitForLoadState() // the promise resolves after "load" event.
        await expect(page)
            .toHaveScreenshot('buy.png', {
            maxDiffPixels: pixelDiff, // Allow small differences
        });
    });

    test('Visual Regression for Sell Menu', {
        tag: '@smoke' }, async ({ page }) => {
        await headerPage.clickSell(); // Click Sell link
        await page.waitForLoadState() // the promise resolves after "load" event.
        await expect(page)
            .toHaveScreenshot('sell.png', {
            maxDiffPixels: pixelDiff, // Allow small differences
        });
    });

    test('Visual Regression for Results Menu', {
        tag: '@smoke' }, async ({ page }) => {
        await headerPage.clickResults(); // Click Results link
        await page.waitForLoadState() // the promise resolves after "load" event.
        await expect(page)
            .toHaveScreenshot('results.png', {
            maxDiffPixels: pixelDiff, // Allow small differences
        });
    });

    test('Visual Regression for Equipment Menu', {
        tag: '@smoke' }, async ({ page }) => {
        await headerPage.clickEquipment(); // Click Equipment text
        await page.waitForLoadState() // the promise resolves after "load" event.
        await expect(page)
            .toHaveScreenshot('equipment.png', {
            maxDiffPixels: pixelDiff, // Allow small differences
        });
    });

    test('Visual Regression for Appraisals Menu', {
        tag: '@smoke' }, async ({ page }) => {
        await headerPage.clickAppraisals(); // Click Appraisals link
        await page.waitForLoadState() // the promise resolves after "load" event.
        await expect(page)
            .toHaveScreenshot('appraisals.png', {
                mask:[
                    page.locator('#root > div > div:nth-child(1)')
                ],
                fullPage: true,
                maxDiffPixels: pixelDiff, // Allow small differences
        });
    });

    test('Visual Regression for Shipping Menu', {
    tag: '@smoke' }, async ({ page }) => {
        await headerPage.clickShipping(); // Click Shipping link
        await page.waitForLoadState() // the promise resolves after "load" event.
        await expect(page)
            .toHaveScreenshot('shipping.png', {
                mask: [
                    page.locator('#html5_video_bfprqvef1t')
                ],
                fullPage: true,
                maxDiffPixels: pixelDiff, // Allow small differences
        });
    });

    test('Visual Regression for About Menu', {
        tag: '@smoke' }, async ({ page }) => {
        await headerPage.clickAbout(); // Click About link
        await page.waitForLoadState() // the promise resolves after "load" event.
        await expect(page)
            .toHaveScreenshot('about.png', {
            maxDiffPixels: pixelDiff, // Allow small differences
        });
    });
});
