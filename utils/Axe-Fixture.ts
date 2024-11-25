import { test as base, expect, Page } from '@playwright/test';
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
 * Extends the Playwright base test with a `makeAxeBuilder` fixture.
 * This fixture initializes AxeBuilder with predefined accessibility tags.
 */
export const test = base.extend<AxeFixture>({
    makeAxeBuilder: async ({ page }: { page: Page }, use: (builder: () => AxeBuilder) => Promise<void>) => {
        const makeAxeBuilder = () => {
            try {
                return new AxeBuilder({ page })
                    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']);
            } catch (error) {
                console.error('Error creating AxeBuilder instance:', error);
                throw error;
            }
        };

        await use(makeAxeBuilder);
    },
});

export { expect };
