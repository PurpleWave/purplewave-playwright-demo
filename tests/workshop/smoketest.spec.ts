import { test, expect } from '@playwright/test';
import { HeaderPage } from '../../pages/header.page'; // Import the page object model

test.describe('Header Menu Visual Regression', () => {
  let headerPage: HeaderPage;

  test.beforeEach(async ({ page }) => {
    // Initialize the page object before each test
    headerPage = new HeaderPage(page);
    await page.goto('https://purplewave.com');
  });

  test('Visual Regression for Auctions Menu', async ({ page }) => {
    await headerPage.clickAuctions(); // Click Auctions link
    await page.waitForTimeout(1000); // Optional: wait for content to load
    await expect(page).toHaveScreenshot('auctions.png', {
      maxDiffPixels: 100, // Allow small differences
    });
  });

  test('Visual Regression for Buy Menu', async ({ page }) => {
    await headerPage.clickBuy(); // Click Buy link
    await page.waitForTimeout(1000); // Optional: wait for content to load
    await expect(page).toHaveScreenshot('buy.png');
  });

  test('Visual Regression for Sell Menu', async ({ page }) => {
    await headerPage.clickSell(); // Click Sell link
    await page.waitForTimeout(1000); // Optional: wait for content to load
    await expect(page).toHaveScreenshot('sell.png');
  });

  test('Visual Regression for Results Menu', async ({ page }) => {
    await headerPage.clickResults(); // Click Results link
    await page.waitForTimeout(1000); // Optional: wait for content to load
    await expect(page).toHaveScreenshot('results.png');
  });

  test('Visual Regression for Equipment Menu', async ({ page }) => {
    await headerPage.clickEquipment(); // Click Equipment text
    await page.waitForTimeout(1000); // Optional: wait for content to load
    await expect(page).toHaveScreenshot('equipment.png');
  });

  test('Visual Regression for Appraisals Menu', async ({ page }) => {
    await headerPage.clickAppraisals(); // Click Appraisals link
    await page.waitForTimeout(1000); // Optional: wait for content to load
    await expect(page).toHaveScreenshot('appraisals.png');
  });

  test('Visual Regression for Shipping Menu', async ({ page }) => {
    await headerPage.clickShipping(); // Click Shipping link
    await page.waitForTimeout(1000); // Optional: wait for content to load
    await expect(page).toHaveScreenshot('shipping.png');
  });

  test('Visual Regression for About Menu', async ({ page }) => {
    await headerPage.clickAbout(); // Click About link
    await page.waitForTimeout(1000); // Optional: wait for content to load
    await expect(page).toHaveScreenshot('about.png');
  });
});