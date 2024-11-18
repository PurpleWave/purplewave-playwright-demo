// lighthouse-config.ts
import { Config } from 'lighthouse'; // Import types from Lighthouse

const lighthouseConfig: Config = {
  extends: 'lighthouse:default',
  settings: {
    // Set all category score thresholds to 1 (100%)
    budgets: [], // Keep default budgets
    throttlingMethod: 'simulate', // Default throttling method
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo', 'pwa'],
    scoreThresholds: {
      performance: 1,
      accessibility: 1,
      'best-practices': 1,
      seo: 1,
      pwa: 1,
    },
    emulatedFormFactor: 'desktop', // Default to 'desktop'; change to 'mobile' if needed
  },
};

export default lighthouseConfig;