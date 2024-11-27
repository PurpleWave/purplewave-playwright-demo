import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */

// Load environment-specific .env file
const ENV = process.env.ENV || 'qa';
const APP = process.env.APP || 'fe'; // Default app is 'fe'
dotenv.config({ path: `./env/${APP}/.env.${APP}.${ENV}` });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  timeout: 60_000,
  testDir: './tests',
  outputDir: './test-results',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    baseURL: 'https://purplewave.com',
    headless: true,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
      // { name: 'fe.qa', testDir: './tests/fe', use: { baseURL: process.env.BASE_URL } },
      // { name: 'cliq.qa', testDir: './tests/cliq', use: { baseURL: process.env.BASE_URL } },
      // { name: 'ims.qa', testDir: './tests/ims', use: { baseURL: process.env.BASE_URL } },
      // { name: 'fe.stage', testDir: './tests/fe', use: { baseURL: process.env.BASE_URL } },
      // { name: 'cliq.stage', testDir: './tests/cliq', use: { baseURL: process.env.BASE_URL } },
      // { name: 'ims.stage', testDir: './tests/ims', use: { baseURL: process.env.BASE_URL } },
      // { name: 'fe.prod', testDir: './tests/fe', use: { baseURL: process.env.BASE_URL } },
      // { name: 'cliq.prod', testDir: './tests/cliq', use: { baseURL: process.env.BASE_URL } },
      // { name: 'ims.prod', testDir: './tests/ims', use: { baseURL: process.env.BASE_URL } },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    // /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    // /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
