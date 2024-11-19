// axe-fixture.ts
import { test as base, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { axeConfig } from '../axe.config';

type AxeFixture = {
  makeAxeBuilder: () => AxeBuilder;
};

// Extend base test with "makeAxeBuilder" to initialize AxeBuilder with config options
export const test = base.extend<AxeFixture>({
  makeAxeBuilder: async ({ page }, use) => {
    const makeAxeBuilder = () =>
      new AxeBuilder({ page })
        .withTags(axeConfig.tags)
        .exclude(axeConfig.exclude);
    await use(makeAxeBuilder);
  },
});

export { expect };
