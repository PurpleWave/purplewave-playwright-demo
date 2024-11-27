import { Page, Locator } from 'playwright';

/**
 * NAMEOFPAGE class for handling STUFF AND THINGS
 */
export class NavigationPage {
    private page: Page;
    public agElectronicsLink: Locator;

    constructor(page: Page) {
        this.page = page;

        // Ag Equipment
        this.agElectronicsLink = this.page.locator('role=link[name="Ag Electronics"]');
    }

    /**
     * Click the given link text.
     * @param linkText Text of the link to be clicked
     */
    async clickLink(linkText: string){
        const link = this.page.locator(`role=link[name="${linkText}"]`);
        await link.click();
    }

    
}