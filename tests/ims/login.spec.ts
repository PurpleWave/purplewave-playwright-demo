import { test, expect } from '@playwright/test';

test.only('test', async ({ page }) => {
    await page.goto('https://qa.cliquidator.info/c/');
    await page.locator('input[name="username"]').fill('');
    await page.locator('input[name="password"]').fill('');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForTimeout(10000);
    await page.goto('https://ims-qa.cliquidator.info/home');
    await page.waitForTimeout(10000);
});