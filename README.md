# Playwright Framework (TypeScript)

This repository contains a robust Playwright framework written in TypeScript. It supports advanced testing features like visual regression, accessibility testing with Axe Core, and Google Lighthouse audits, all configurable via environment flags.

## Features

- **Visual Regression Testing**
- **Accessibility Testing (Axe Core)**
- **Google Lighthouse Audits**
- **Configurable Testing with Command-line Flags**
- **Smoke Testing for All Pages**
- **Page Object Model (POM) Design**
- **Test Data Generation with FakerJS**

---

## Prerequisites

Before cloning the repository, ensure you have the following installed:

1. **Node.js** (version 16 or higher)
2. **npm** or **yarn** (comes with Node.js)
3. **Git** (to clone the repository)
4. **A compatible code editor** (e.g., VS Code)

---

## Installation

Follow these steps to set up the framework on your local machine:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Install Dependencies

Run the following command to install all required dependencies:

```bash
npm install
```

OR, if you prefer yarn:

```bash
yarn install
```

### 3. Configure Environment Variables

Create a \.env\ file in the root of the project and configure it based on the following template:

```bash
# Environment variables
RUN_VISUAL_COMPARISON = true
RUN_LH_AUDIT = true
ENABLE_AXE = true
```

Adjust the flags as needed - right now these flags are experimental and not tied to any implementation. Nicholas Wilcox is the owner of the effort.

### 4. Install Playwright Browsers

Run the following command to install Playwright's browsers:

```bash
npx playwright install
```

---
## AXE Integration


https://playwright.dev/docs/accessibility-testing

---
## Google Lighthouse Integration
This framework integrates Google Lighthouse audits into Playwright for testing key metrics like
- **Performance**
- **Accessibility**
- **Best practices**
- **SEO**
- **PWA compliance**

Reports are auto-generated in JSON, HTML, and CSV formats and stored in the lighthouse-report/ directory.

Thresholds for each metric can be customized through the global config `lighthouse-config.ts`, or through the `playAudit` function in `playwright-lighthouse` module.

To learn more about google lighthouse, [visit the NPM repo](https://www.npmjs.com/package/playwright-lighthouse "go to NPM") or visit 

## Running Tests

### All Tests

Run all tests:
```bash
npx playwright test
```

### Smoke Tests

Run the smoke tests to verify all pages:

```bash
npx playwright test:smoke
```

### Visual Regression

Run tests with visual comparison enabled:

```bash
npx playwright test:visual
```

### Google Lighthouse Audits

Run tests with Lighthouse analytics:

```bash
npm run test:lighthouse
```

---

## Directory Structure

```plaintext
.
├── lighthouse-report/      # Folder for Google Lighthouse
├── node_modules/           # Installed dependencies
├── pages/                  # Page object files
├── playwright-report/      # Folder for playwright reports
├── test-results/           # Folder for playwright test results
├── tests/                  # Test files
├── utils/                  # Utility files (e.g., test data generation)
├── .env                    # Environment variables (experimental)
├── .gitignore              # A list of files to ignore when pushing to github
├── axe.config.ts           # AXE configuration file
├── lighthouse-config.ts    # Lighthouse configuration file
├── package-lock.json       # Locks versions of dependencies
├── package.json            # Project metadata 
├── playwright.config.ts    # Playwright configuration
├── README.md               # This file
└── tsconfig.json           # TypeScript configuration

```

---
## Supporting Documentation
- [Automated Test Structure](https://pwhelpdesk.atlassian.net/wiki/spaces/QE/pages/608567300/Playwright+Automated+Test+Structure "Learn about the parts of a standard test in Playwright at PurpleWave")
## Additional Notes

1. Ensure your Node.js version matches the specified requirement in \package.json\.
2. If you face issues with browser binaries, re-run \
```bash
npx playwright install
```
3. All output reports (e.g., accessibility, Lighthouse, and visual) will be saved in the \
reports/\ directory.
TODO: NOPE - fix this one way or another.

---

## Contributing

If you want to contribute to this repository, please create a new branch and submit a pull request. Ensure your code follows the project's coding standards and includes test coverage.

---