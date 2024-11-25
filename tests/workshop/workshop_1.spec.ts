/////////////////////////////////////////////////////////////////////////////////////////
//
//                           This is a learning sandbox.
//
/////////////////////////////////////////////////////////////////////////////////////////
import { test, expect } from '@playwright/test';
import { HeaderPage } from '../../pages/header.page';
import { UtilitiesPage } from '../../pages/Utilities.page';

// TEST

import { AuctionPage } from '../../pages/Auction.page';
test.describe('Registration Flow', () => {
    let header: HeaderPage;
    let page: any;
    let auction: AuctionPage;
    let utilities: UtilitiesPage;

    // Use beforeEach to set up page objects and common setup logic
    test.beforeEach(async ({ page: p }, testInfo) => {
        // Add metadata tags for ALL tests 
        utilities = new UtilitiesPage(page);
        utilities.addTestMetadata(testInfo, {
            groups: ['auctionPage'],
            issues: ['JIRA-1234']
        });
        page = p;
        header = new HeaderPage(page);
        auction = new AuctionPage(page);

        // Navigate to the homepage before each test
        await p.goto('https://www.purplewave.com/');     // TODO: Cache and cookies? Maybe a new session for this type of TC?
    });

    test('highlight all locators in AuctionPage', async ({ page }, testInfo) => {
        tag:
        utilities.addTestMetadata(testInfo, {
            groups: ['smoke', 'utilities'],
            issues: ['JIRA-456']    // a member of both 1234 and 456
        });
      
        utilities.highlightAllLocators(auction)
        // Wait to observe the highlights before the test ends
        await page.waitForTimeout(3000);
      });

    test('should allow a user to register with valid details', async () => {
        
    });
});
