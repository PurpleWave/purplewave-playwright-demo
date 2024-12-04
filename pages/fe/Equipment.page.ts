import { Page, Locator } from 'playwright';

/**
 * EquipmentPage class for interacting with the equipment page.
 */
export class EquipmentPage {
    private page: Page;
    
    /**
     * Creates a new instance of the Equipment class.
     * @param page - The Playwright page object.
     */
    constructor(page: Page) {
        this.page = page;
    }
}
