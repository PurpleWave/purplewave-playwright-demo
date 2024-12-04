import { Page, Locator } from 'playwright';

/**
 * RegisterPage class for interacting with the register page.
 */
export class RegisterPage {
    private page: Page;  
    
    // Declare locators
    public loginOrRegister: Locator;
    public firstNameInput: Locator;
    public lastNameInput: Locator;
    public emailInput: Locator;
    public passwordInput: Locator;
    public referralTypeDropdown: Locator;
    public preferredLanguageDropdown: Locator;
    //
    public copartOption: Locator;
    /**
     * Creates a new instance of the RegisterPage class.
     * @param page - The Playwright page object.
     */
    constructor(page: Page) {
        this.page = page;
        
        // Initialize locators
        this.loginOrRegister = this.page.locator('role=button[name="Login or Register"]');
        this.firstNameInput = this.page.locator('label:text("First Name")');
        this.lastNameInput = this.page.locator('label:text("Last Name")');
        this.emailInput = this.page.locator('#register_email'); // TODO: GROSS
        this.passwordInput = this.page.locator('label:text("Password")');    
        this.referralTypeDropdown = this.page.locator('[aria-labelledby="mui-component-select-referral_type"]');
        this.preferredLanguageDropdown = this.page.locator('#mui-component-select-preferred_language'); // TODO: GROSS
    
    }

    // Method to select an option dynamically by its visible text
    // TODO: Put into a utility class
    public async selectOptionByText(optionText: string): Promise<void> {

        // Locate the option by its text within the dropdown
        const optionLocator = this.page.locator(`[role="listbox"] >> [role="option"]:has-text("${optionText}")`);

        // Click the option to select it
        await optionLocator.click();
    }

    // Method for clicking the "Login or Register" button
    public async clickLoginOrRegisterButton(): Promise<void> {
        await this.loginOrRegister.click();
    }

    // Method for entering the first name
    public async enterFirstName(firstName: string): Promise<void> {
        await this.firstNameInput.fill(firstName);
    }

    // Method for entering the last name
    public async enterLastName(lastName: string): Promise<void> {
        await this.lastNameInput.fill(lastName);
    }

    // Method for entering the email
    public async enterEmail(email: string): Promise<void> {
        await this.emailInput.fill(email);
    }

    // Method for entering the password
    public async enterPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }
}
