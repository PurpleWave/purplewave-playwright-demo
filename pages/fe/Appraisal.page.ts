import { Page, Locator } from 'playwright';

/**
 * AppraisalPage class for interacting with the appraisal page.
 */

export class AppraisalPage {
    private page: Page;

    public requestQuoteLink: Locator;
    public nameInput: Locator;
    public addressInput: Locator;
    public stateDropdown: Locator;
    public stateDropdownOption: Locator;
    public postalCodeInput: Locator;
    public countryDropdown: Locator;
    public countryDropdownOption: Locator;
    public emailInput: Locator;
    public phoneNumberInput: Locator;
    public termsCheckbox: Locator;
    public companyNameInput: Locator;
    public additionalInfoInput: Locator;
    public submitButton: Locator;

    // Error message locators
    public streetErrorText: Locator;
    public cityErrorText: Locator;
    public postalCodeErrorText: Locator;
    public emailErrorText: Locator;
    public phoneErrorText: Locator;

    /**
     * Creates a new instance of the AppraisalPage class.
     * @param page - The Playwright page object.
     */
    constructor(page: Page) {
        this.page = page;
        this.requestQuoteLink = this.page.getByRole('link', { name: 'Request a quote now!' });
        this.nameInput = this.page.getByTestId('appraisals_name').getByLabel('Name');
        this.addressInput = this.page.getByLabel('Address');
        this.stateDropdown = this.page.getByLabel('', { exact: true });
        this.stateDropdownOption = this.page.getByRole('option', { name: 'California' });
        this.postalCodeInput = this.page.getByLabel('Postal Code');
        this.countryDropdown = this.page.getByLabel('United States');
        this.countryDropdownOption = this.page.getByRole('option', { name: 'United States' });
        this.emailInput = this.page.getByLabel('Email', { exact: true });
        this.phoneNumberInput = this.page.getByLabel('Phone Number');
        this.termsCheckbox = this.page.getByLabel('By checking this box (');
        this.companyNameInput = this.page.getByLabel('Company Name [optional]');
        this.additionalInfoInput = this.page.getByLabel('Additional Information [');
        this.submitButton = this.page.getByRole('button', { name: 'Submit' });
        // Initialize error message locators
        this.streetErrorText = this.page.getByText('Please provide your street.');
        this.cityErrorText = this.page.getByText('Please provide your city.');
        this.postalCodeErrorText = this.page.getByText('Please provide your postal');
        this.emailErrorText = this.page.getByText('Please provide your email');
        this.phoneErrorText = this.page.getByText('Please provide your phone');

    }

//     /**
//      * Example method to interact with the example element on the page.
//      * @param {string} text - The text to input into the example element.
//      */
//     async exampleMethod(text: string) {
//         await this.exampleLocator.fill(text);  // Use the locator to fill the field
//         await this.exampleLocator.click();     // Example action: click the element
//     }

//   /**
//    * Example method to retrieve text from an element.
//    * @returns {Promise<string>} - The text content of the example element.
//    */
//   async getExampleText(): Promise<string> {
//     return await this.exampleLocator.textContent();
//   }
}
