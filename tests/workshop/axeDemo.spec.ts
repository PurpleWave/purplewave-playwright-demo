import { test, expect } from '../../utils/Axe-Fixture';
import { HeaderPage } from '../../pages/header.page';
import { UtilitiesPage } from '../../pages/utilities.page';

test.describe('Accessibility Tests', () => {
  let headerPage: HeaderPage;
  let utilitiesPage: UtilitiesPage;

  test.beforeEach(async ({ page }) => {
    headerPage = new HeaderPage(page);
    utilitiesPage = new UtilitiesPage(page);
    await page.goto('https://purplewave.com');
  });

  test.only('should not have accessibility violations on the main page', async ({ makeAxeBuilder }) => {
    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

});