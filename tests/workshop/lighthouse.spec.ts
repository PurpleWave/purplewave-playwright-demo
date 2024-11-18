import { chromium } from 'playwright';
import type { Browser } from 'playwright';
import { playAudit } from 'playwright-lighthouse';
import { test as base } from '@playwright/test';
import getPort from 'get-port';   // not an export member - no brackets

export const lighthouseTest = base.extend<
  {},
  { port: number; browser: Browser }
>({
  
  port: [
    async ({}, use) => {
      // Assign a unique port for each playwright worker to support parallel tests
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
  lighthouseTest.only('should pass lighthouse tests', async ({ page, port }) => {
    await page.goto('http://purplewave.com');
    await page.waitForSelector('#auction-carousel-241119');
    await playAudit({
      page: page,
      url: 'http://purplewave.com',
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
