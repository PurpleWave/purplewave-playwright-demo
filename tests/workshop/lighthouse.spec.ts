import { chromium } from 'playwright';
import type { Browser } from 'playwright';
import { test as base } from '@playwright/test';

export const lighthouseTest = base.extend<
  {},
  { port: number; browser: Browser }
>({
  
  port: [
    async ({}, use) => {
      // Assign a unique port for each playwright worker to support parallel tests
      const { default: getPort } = await import('get-port');
      const port = await getPort();
      await use(port);
    },
    { scope: 'worker' },
  ],

  browser: [
    async ({ port }, use) => {
      const browser = await chromium.launch({
        args: [`--remote-debugging-port=${port}`],
      });
      await use(browser);
    },
    { scope: 'worker' },
  ],
});

lighthouseTest.describe('Lighthouse', () => {
  lighthouseTest('should pass lighthouse tests', async ({ page, port }) => {
    const { playAudit } = await import('playwright-lighthouse');
    await page.goto('https://purplewave.com');
    await page.waitForSelector('#auction-carousel-241119');
    await playAudit({
      page: page,
      url: 'https://purplewave.com',
      port,
      thresholds: {
        performance: 1,
        accessibility: 1,
        'best-practices': 1,
        seo: 1,
        pwa: 1,
      },
      reports: {
        formats: {
          json: true,
          html: true,
          csv: true,
        },
        name: `lighthouse-${new Date().getTime()}`,
        directory: `${process.cwd()}/lighthouse-report`,
      },
    });
    console.log('PASS'); // Log 'PASS' once the audit is complete
  });
});