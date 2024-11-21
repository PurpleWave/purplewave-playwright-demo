import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'fs';
import path from 'path';

/**
 * Performs an accessibility check on the specified page and reports any violations.
 *
 * @param {string} pageName - A unique name for the page being tested (used in report naming).
 * @param {any} page - The Playwright page object to analyze.
 * @param {any} testInfo - Test context information provided by Playwright.
 * @param {string} [context] - An optional CSS selector to limit the scope of the accessibility scan.
 */
export async function checkAndReportA11y(
  pageName: string,
  page: any,
  testInfo: any,
  context?: string // Optional context selector to limit scope of scan
) {
  // Initialize AxeBuilder and apply WCAG tags for accessibility standards
  let axeBuilder = new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']);

  // Conditionally include context if provided
  if (context) {
    axeBuilder = axeBuilder.include(context);
  }

  // Analyze the page for accessibility violations
  const violations = await axeBuilder.analyze();

  // Attach the violations as a JSON file for Playwright reports
  await testInfo.attach(`${pageName}-a11y-violations.json`, {
    body: JSON.stringify(violations.violations, null, 2), // Only attaching violations, not the full results
    contentType: 'application/json',
  });

  // Save the report locally for CI/CD or debugging purposes
  const outputDir = path.join('test-results', 'accessibility-reports');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  const filePath = path.join(outputDir, `${pageName}-a11y-violations.json`);
  fs.writeFileSync(filePath, JSON.stringify(violations.violations, null, 2));

  // Fail the test if there are any accessibility violations
  // TODO: extend to allow violation threshold and exceptions
  expect(violations.violations).toEqual([]);
  page.makeAxeBuilder()
}
