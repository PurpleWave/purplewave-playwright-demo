import { Page } from 'playwright';
import { GlobalUtilitiesPage } from '../../utils/GlobalUtilities.page';

/**
 * Utilities class providing specialized methods for Front End Purplewave.com.
 * Extends the GlobalUtilitiesPage to inherit core utility methods.
 */
export class UtilitiesPage extends GlobalUtilitiesPage {
    /**
     * Creates a new instance of the UtilitiesPage class.
     * @param {Page} page - The Playwright page object.
     */
    constructor(page: Page) {
        super(page);
    }
    
    /**
     * Checks if the "Open Intercom Messenger" button is visible, and if so, hides it by setting its visibility to 'hidden'.
     * This method ensures that the Intercom button does not appear in visual comparison screenshots.
     * 
     * @returns {Promise<void>} A Promise that resolves when the visibility is checked and, if visible, the button is hidden.
     */
    public async hideIntercomIfVisible(): Promise<void> {
        const intercomButton = this.page.getByLabel('Open Intercom Messenger');
        
        // Check if the Intercom button is visible
        if (await intercomButton.isVisible()) {
            try {
                await intercomButton.evaluate((button) => {
                    // Comprehensive approach to hiding the Intercom button
                    (button as HTMLElement).style.visibility = 'hidden';
                    (button as HTMLElement).style.display = 'none';
                });
            } catch (error) {
                console.log(`Could not hide Intercom button: ${error}`);
            }
        }
    }

    /**
     * Waits for the "Open Intercom Messenger" button to be visible on the page.
     * This method checks for the element with aria-label "Open Intercom Messenger" and waits until it becomes visible.
     * 
     * @param {number} [timeout=5000] - The maximum time to wait for the element to be visible, in milliseconds. Defaults to 5000ms.
     * @returns {Promise<void>} A Promise that resolves if the element becomes visible within the specified timeout.
     * Logs a message if the element becomes visible, or logs an error message if it does not appear within the timeout.
     */
    public async waitForIntercomButtonToBeVisible(timeout: number = 5000): Promise<void> {
        try {
            await this.page.waitForSelector('[aria-label="Open Intercom Messenger"]', { state: 'visible', timeout });
            console.log('Intercom button is now visible.');
        } catch (error) {
            console.error(`Intercom button did not become visible within the timeout period of ${timeout}ms.`);
        }
    }

    
}