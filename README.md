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
ENABLE_LIGHTHOUSE=true
ENABLE_ACCESSIBILITY=true
ENABLE_VISUAL_COMPARISON=true
```

Adjust the flags as needed.

### 4. Install Playwright Browsers

Run the following command to install Playwright's browsers:

```bash
npx playwright install
```

---

## Running Tests

### Smoke Tests

Run the smoke tests to verify all pages:

```bash
npm run test:smoke
```

### Visual Regression

Run tests with visual comparison enabled:

```bash
npm run test:visual
```

### Accessibility Testing

Run accessibility checks using Axe Core:

```bash
npm run test:accessibility
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
├── node_modules/           # Installed dependencies
├── src/
│   ├── tests/              # Test files
│   ├── pages/              # Page object files
│   ├── utils/              # Utility files (e.g., test data generation)
│   └── config/             # Configuration files
├── .env                    # Environment variables
├── package.json            # npm project file
├── tsconfig.json           # TypeScript configuration
├── README.md               # This file
└── playwright.config.ts    # Playwright configuration
```

---

## Additional Notes

1. Ensure your Node.js version matches the specified requirement in \package.json\.
2. If you face issues with browser binaries, re-run \
px playwright install\.
3. All output reports (e.g., accessibility, Lighthouse, and visual) will be saved in the \
eports/\ directory.

---

## Contributing

If you want to contribute to this repository, please create a new branch and submit a pull request. Ensure your code follows the project's coding standards and includes test coverage.

---

## License

This repository is licensed under the [MIT License](LICENSE).
