import { test } from '../../utils/Axe-Fixture';
import { checkAndReportA11y } from '../../utils/Accessibility.util';
import { HeaderPage } from '../../pages/header.page';

test.describe('Accessibility Tests', () => {
    let headerPage: HeaderPage;

    test.beforeEach(async ({ page }) => {
        headerPage = new HeaderPage(page);
        await page.goto('https://purplewave.com');
    });
    /**
     * Checks that the main page has no accessibility violations.
     * 
     * @param {Object} page - The Playwright page object.
     * @param {Object} testInfo - Test context information provided by Playwright.
     */
    test('Main page should not have accessibility violations', async ({ page}, testInfo ) => {
        await checkAndReportA11y('MainPage', page, testInfo);
    });

});