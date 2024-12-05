import { test, expect } from '@playwright/test';
import { NavigationPage } from '../../pages/fe/Navigation.page';
import { LoginPage } from '../../pages/fe/Login.page';
import { RegisterPage } from '../../pages/fe/Register.page';
import { UtilitiesPage } from '../../pages/fe/Utilities.page'; // Import UtilitiesPage

// TEST

import { AuctionPage } from '../../pages/fe/Auction.page';
test.describe('Registration Flow', () => {
    let navigate: NavigationPage;
    let login: LoginPage;
    let register: RegisterPage;
    let page: any;
    // TEST
    let auction: AuctionPage;
    let utilities: UtilitiesPage;

    // Use beforeEach to set up page objects and common setup logic
    test.beforeEach(async ({ page: p }, testInfo) => {
        page = p;
        navigate = new NavigationPage(page);
        login = new LoginPage(page);
        register = new RegisterPage(page);
        auction = new AuctionPage(page);
        // TEST
        utilities = new UtilitiesPage(page);
        utilities.addTestMetadata(testInfo, {
            groups: ['auctionPage'],
            issues: ['JIRA-1234']
        });

        // Navigate to the homepage before each test
        await page.goto('https://www.purplewave.com/');     // TODO: Cache and cookies? Maybe a new session for this type of TC?
    });

    test('highlight all locators in AuctionPage', async ({ page }, testInfo) => {
        utilities.addTestMetadata(testInfo, {
            groups: ['smoke', 'utilities'],
            issues: ['JIRA-456']    // a member of both 1234 and 456
        });
      

    test('should allow a user to register with valid details', async ({ page }, testInfo) => {
        utilities.addTestMetadata(testInfo, {
            groups: ['smoke', 'registration'],
            issues: ['JIRA-456']    // a member of both 1234 and 456
        });
        // Step 1: Navigate to the registration page
        await navigate.loginOrRegister.click();
        await login.registerHere.click();

        // Step 2: Fill out the registration form with valid data
        await register.enterFirstName('John');
        await register.enterLastName('Doe');
        await register.enterEmail('johndoe@example.com');
        await register.enterPassword('securePassword123');
        await register.referralTypeDropdown.click();
        // Select the "Copart" option
        await register.selectOptionByText('Copart');
        
        // Select "English"
        // TODO: Figure out the "wiggle" - maybe animation related
        await register.preferredLanguageDropdown.click();
        await register.selectOptionByText('English');

        // Step 3: Submit the form (implement this when ready)
        // await register.clickLoginOrRegisterButton();

        // Optional: Wait for success or page update after submission
        await page.waitForTimeout(3000); // TODO: Remove - DEMO purposes ONLY

        // Step 4: add assertions to verify success:
        await expect(page).toHaveURL('https://www.purplewave.com/SOMETHINGIDUNNO');
    });

    test('should show error for invalid email', async ({ page }, testInfo) => {
        utilities.addTestMetadata(testInfo, {
            groups: ['smoke', 'registration'],
            issues: ['JIRA-456']    // a member of both 1234 and 456
        });
        // Similar steps for an invalid email test case
        await navigate.loginOrRegister.click();
        await login.registerHere.click();

        // Step 1: Fill out the registration form with invalid email
        await register.enterFirstName('John');
        await register.enterLastName('Doe');
        await register.enterEmail('invalid-email');
        await register.enterPassword('securePassword123');
        await register.referralTypeDropdown.click();
        await register.selectOptionByText('Copart');
        await register.preferredLanguageDropdown.click();   

        // Optionally, check for error message or other validation
        // await expect(page.locator('text=Invalid email address')).toBeVisible();
        // what do we really want to check here?
        // Form validation?
        // user flow?
    });

});
});