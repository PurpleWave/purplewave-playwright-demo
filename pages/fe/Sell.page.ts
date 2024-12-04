import { Page, Locator } from 'playwright';

/**
 * SellPage class for interacting with the sell page.
 */
export class SellPage{
    private page: Page;
    
    // Declare locators
    // Form locators
    public firstNameInput: Locator;
    public lastNameInput: Locator;
    public emailInput: Locator;
    public phoneInput: Locator;
    public streetInput: Locator;
    public postalCodeInput: Locator;
    public stateDropdown: Locator;      // TODO: fix the drop down interactions 
    public countryDropdown: Locator;    // TODO: fix the drop down interactions
    public assetTypeDropdown: Locator;  // TODO: fix the drop down interactions
    public valueDropdown: Locator;      // TODO: fix the drop down interactions
    public imagesInput: Locator;
    public descriptionTextarea: Locator;

    // Section locators
    public assetInformationHeading: Locator;

    // Checkbox and iframe locators
    public termsCheckbox: Locator;
    // TODO: CAPTCHA STUFF NEEDS BYPASS LOCATORS/METHODS

    /**
     * Creates a new instance of the SellPage class.
     * @param page - The Playwright page object.
     */
    constructor(page: Page) {
        this.page = page;

        // Initialize locators
        // Form locators
        this.firstNameInput = this.page.locator('input[name="firstName"]');
        this.lastNameInput = this.page.locator('input[name="lastName"]');
        this.emailInput = this.page.locator('input[name="email"]');
        this.phoneInput = this.page.getByPlaceholder('-555-5555');
        this.streetInput = this.page.locator('input[name="street"]');
        this.postalCodeInput = this.page.locator('input[name="postalCode"]');
        this.stateDropdown = this.page.locator('select[name="state"]');
        this.countryDropdown = this.page.locator('select[name="countryId"]');
        this.assetTypeDropdown = this.page.locator('select[name="assetType"]');
        this.valueDropdown = this.page.locator('select[name="value"]');
        this.imagesInput = this.page.locator('input[name="images"]');
        this.descriptionTextarea = this.page.locator('textarea[name="description"]');

        // Section locators
        this.assetInformationHeading = this.page.getByRole('heading', { name: 'Asset Information' });

        // Checkbox and iframe locators
        this.termsCheckbox = this.page.getByRole('checkbox');
        // TODO: CAPTCHA STUFF NEEDS BYPASS LOCATORS/METHODS
    }
}