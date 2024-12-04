import { test, expect } from '@playwright/test';

test.only('test', async ({ page }) => {
    // this login pattern takes ~26 seconds to execute
    await page.goto('https://qa.cliquidator.info/c/');
    await page.locator('input[name="username"]').fill('nick.wilcox');
    await page.locator('input[name="password"]').fill('x.x.(Kickx.x.ball)!1');
    await page.getByRole('button', { name: 'Sign in' }).click();
    
    await page.waitForTimeout(7000);
    await page.waitForLoadState('load');
    
    await page.goto('https://ims-qa.cliquidator.info/home');
    await page.waitForTimeout(10000);
});