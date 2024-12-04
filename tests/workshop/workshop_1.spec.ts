/////////////////////////////////////////////////////////////////////////////////////////
//
//                           This is a learning sandbox.
//
/////////////////////////////////////////////////////////////////////////////////////////
import { test, expect } from '@playwright/test';
import { HeaderPage } from '../../pages/fe/Header.page';
import { UtilitiesPage } from '../../utils/Utilities.page'; // Import UtilitiesPage

// TEST
import * as dotenv from 'dotenv';

// TEST
dotenv.config({
    path: '.env.test'
})

import { AuctionPage } from '../../pages/fe/Auction.page';
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
        });

    test('highlight all locators in AuctionPage', async ({ page }, testInfo) => {
        utilities.addTestMetadata(testInfo, {
            groups: ['smoke', 'utilities'],
            issues: ['JIRA-456']    // a member of both 1234 and 456
        });

      });

    test('should allow a user to register with valid details', async () => {
        
        // go to env BASE_URL
        // await page.goto(process.env.BASE_URL);
        // const username = process.env.USERNAME || 'defaultuser';
        // const password = process.env.PASSWORD || 'defaultpass';
        // console.log(utilities.environmentBaseUrl, utilities.environmentUserName, utilities.environmentPassword);
        
    });
});
