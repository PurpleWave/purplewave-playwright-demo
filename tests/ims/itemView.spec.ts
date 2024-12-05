import { test, expect } from '@playwright/test';
import { SideDrawerPage } from '../../pages/ims/SideDrawer.page';
import { FormPage } from '../../pages/ims/Form.page';

test.describe('TEST COLLECTION DESCRIPTION', () => {
    let page: any;
    let sideDrawer: SideDrawerPage;
    let form: FormPage;

    test.beforeEach(async ({ page }, testInfo ) => {
        // Initialize the page objects before each test
        sideDrawer = new SideDrawerPage(page);
        form = new FormPage(page);
        await page.goto('/');
        await page.waitForLoadState();
    });

    test('TEST DESCRIPTION', async ({ page }, testInfo ) => {
        // Test logic goes here
    
        
        // Add test logic here
        // Example: await expect(page).toHaveTitle(/expectedTitle/);}
    });
});