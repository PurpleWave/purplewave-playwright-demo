import { Config } from 'lighthouse'; // Import types from Lighthouse

/**
 * Lighthouse configuration object.
 * This configuration extends the default Lighthouse settings and customizes specific options.
 */
const lighthouseConfig: Config = {
  extends: 'lighthouse:default',
  settings: {
    // Set all category score thresholds to 1 (100%)
    budgets: [], // Keep default budgets
    throttlingMethod: 'simulate', // Default throttling method
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo', 'pwa'], // Categories to include in the report
    scoreThresholds: {
      performance: 1, // Performance score threshold
      accessibility: 1, // Accessibility score threshold
      'best-practices': 1, // Best practices score threshold
      seo: 1, // SEO score threshold
      pwa: 1, // PWA score threshold
    },
    emulatedFormFactor: 'desktop', // Default to 'desktop'; change to 'mobile' if needed
  },
};

export default lighthouseConfig;