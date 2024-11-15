import { Page, Locator } from 'playwright';

/**
 * UtilitiesPage class providing utility methods for various page interactions.
 */
export class UtilitiesPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

     /**
     * Highlights all locators in the provided page object by applying an outline with specified color and width.
     * This method iterates over each property in the page object, checking if it is a Playwright Locator.
     * If a property is a Locator, it applies a customizable outline to make it visually distinct.
     * 
     * @param {object} pageObject - An instance of a page object containing locators as properties.
     * @param {string} [color='red'] - The color of the outline. Defaults to 'red' if not provided.
     * @param {string} [width='3px'] - The width of the outline. Defaults to '3px' if not provided.
     * @returns {Promise<void>} A Promise that resolves when all locators are processed.
     */
     public async highlightAllLocators(pageObject: object, color: string = 'red', width: string = '3px'): Promise<void> {
        /**
         * Highlights a single element by setting an outline with the specified color and width.
         * 
         * @param {Locator} locator - The Playwright Locator to highlight.
         */
        const highlightElement = async (locator: Locator) => {
            try {
                await locator.evaluate((element, { color, width }) => {
                    if (element) {
                        (element as HTMLElement).style.outline = `${width} solid ${color}`;
                    }
                }, { color, width });
            } catch (error) {
                console.log(`Could not highlight locator: ${error}`);
            }
        };

        // Iterate over each property in the page object, highlighting if it is a Locator
        for (const key in pageObject) {
            const locator = pageObject[key];
            if (locator && typeof locator.evaluate === 'function') {
                await highlightElement(locator);
            }
        }
    }
}
