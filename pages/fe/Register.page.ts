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
    public registerButton: Locator;

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
        this.registerButton = this.page.getByRole('button', { name: 'Register', exact: true })
    
    }

    // Method to select an option dynamically by its visible text
    // TODO: Put into a utility class

    /**
     * Helper function to select an option from a dropdown by its visible text.
     * Must have Role of listbox and option.
     * @param optionText - The visible text of the option to select.
     * @example await selectOptionByText('Copart');
     */
    public async selectOptionByText(optionText: string): Promise<void> {

        // Locate the option by its text within the dropdown
        const optionLocator = this.page.locator(`[role="listbox"] >> [role="option"]:has-text("${optionText}")`);

        // Click the option to select it
        await optionLocator.click();
    }

    
}