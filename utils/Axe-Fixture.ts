import { test as base, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

type AxeFixture = {
    /**
     * Creates and configures a new AxeBuilder instance for accessibility testing.
     * 
     * @returns {AxeBuilder} A configured AxeBuilder instance.
     */
    makeAxeBuilder: () => AxeBuilder;
};

/**
 * Extends the Playwright base test with an `makeAxeBuilder` fixture.
 * This fixture initializes AxeBuilder with predefined accessibility tags.
 */
export const test = base.extend<AxeFixture>({
    makeAxeBuilder: async ({ page }, use) => {
        const makeAxeBuilder = () =>
            new AxeBuilder({ page })
            // Customize tags if needed
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']);
            

        await use(makeAxeBuilder);
    },
});

export { expect };
