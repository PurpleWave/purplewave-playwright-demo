import { test, expect } from '@playwright/test';
import { NavigationPage } from '../../pages/fe/Navigation.page';
import { UtilitiesPage } from '../../pages/fe/Utilities.page';
import { LoginPage } from '../../pages/fe/Login.page';
import { RegisterPage } from '../../pages/fe/Register.page';
import { assert } from 'console';

test.describe('Auction Page Core Smoke Test', () => {
    let navigate: NavigationPage;
    let utilities: UtilitiesPage;
    let loginpage: LoginPage;
    let registerpage: RegisterPage;
    const pixelDiff = 100;
    
    test.beforeEach(async ({ page }, testInfo ) => {

        // Initialize the page objects before each test
        navigate = new NavigationPage(page);
        utilities = new UtilitiesPage(page);
        loginpage = new LoginPage(page);
        registerpage = new RegisterPage(page);
        // await page.goto('/');
        // await page.waitForLoadState();
    });

    test.skip('compare screen captures', async ({ page }, testInfo ) => {
        // Test logic goes here
        utilities.addTestMetadata(testInfo, {
            groups: ['CoreSmoke']
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
    test.only('has title', 
        {tag: '@smoke'},
        async ({ page, baseURL }) => {
        
        await page.goto('https://playwright.dev/');
        // TEST CODE
      
      
      
        console.log(`Base URL: ${baseURL}`);
        console.log(`Env URL: ${process.env.BASE_URL}`);
        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/Playwright/);
    });
});