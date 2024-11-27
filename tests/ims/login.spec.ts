import { test, expect } from '@playwright/test';

test.only('test', async ({ page }) => {
  await page.goto('chrome-error://chromewebdata/');
  await page.getByRole('button', { name: 'Advanced' }).click();
  await page.getByRole('link', { name: 'Proceed to ims-qa.cliquidator' }).click();
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('nick.wilcox@gmail.com');
  await page.locator('input[name="username"]').press('Tab');
  await page.locator('input[name="password"]').fill('x.x.(Kickx.x.ball)!1');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').press('ControlOrMeta+Shift+ArrowRight');
  await page.locator('input[name="username"]').press('ControlOrMeta+Shift+ArrowRight');
  await page.locator('input[name="username"]').press('ControlOrMeta+Shift+ArrowRight');
  await page.locator('input[name="username"]').fill('nick.wilcox');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByPlaceholder('Account number').click();
  await page.goto('https://ims-qa.cliquidator.info/home');
});