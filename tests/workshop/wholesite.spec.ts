import { test, expect } from '@playwright/test';
import { HeaderPage } from '../../pages/header.page';
import { LoginPage } from '../../pages/login.page';
import { RegisterPage } from '../../pages/register.page';

test.describe('Registration Flow', () => {
    let header: HeaderPage;
    let login: LoginPage;
    let register: RegisterPage;
    let page: any;

    // Use beforeEach to set up page objects and common setup logic
    test.beforeEach(async ({ page: p }) => {
        page = p;
        header = new HeaderPage(page);
        login = new LoginPage(page);
        register = new RegisterPage(page);

        // Navigate to the homepage before each test
        await page.goto('https://www.purplewave.com/');     // TODO: Cache and cookies? Maybe a new session for this type of TC?
    });

    test('should allow a user to register with valid details', async () => {
        // Step 1: Navigate to the registration page
        await header.loginOrRegister.click();
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
        // await expect(page).toHaveURL('https://www.purplewave.com/SOMETHINGIDUNNO');
    });

    test('should show error for invalid email', async () => {
        // Similar steps for an invalid email test case
        await header.loginOrRegister.click();
        await login.registerHere.click();

        // Step 1: Fill out the registration form with invalid email
        await register.enterFirstName('John');
        await register.enterLastName('Doe');
        await register.enterEmail('invalid-email');
        await register.enterPassword('securePassword123');

        // Optionally, check for error message or other validation
        // await expect(page.locator('text=Invalid email address')).toBeVisible();
    });
});

test.describe('Full Menu Click', () => {
    
})