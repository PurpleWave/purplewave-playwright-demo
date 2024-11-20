import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'fs';
import path from 'path';

export async function checkAndReportA11y(
  pageName: string,
  page: any,
  testInfo: any,
  context?: string // Optional context selector to limit scope of scan
) {
  // Initialize AxeBuilder and apply configuration
  let axeBuilder = new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']);

  // Conditionally include context if provided
  if (context) {
    axeBuilder = axeBuilder.include(context);
  }

  // Run the accessibility check and get only the violations
  const violations = await axeBuilder.analyze();

  // Attach the violations as a JSON file for Playwright reports
  await testInfo.attach(`${pageName}-a11y-violations.json`, {
    body: JSON.stringify(violations.violations, null, 2), // Only attaching violations, not the full results
    contentType: 'application/json',
  });

  // Manually save the violations report as a fallback (for local file access or CI/CD artifacts)
  const outputDir = path.join('test-results', 'accessibility-reports');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  const filePath = path.join(outputDir, `${pageName}-a11y-violations.json`);
  fs.writeFileSync(filePath, JSON.stringify(violations.violations, null, 2));

  // Fail the test if there are any accessibility violations
  expect(violations.violations).toEqual([]);
}
