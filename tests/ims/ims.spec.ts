import { test, expect } from '@playwright/test';
import { IMSPage } from '../../pages/ims/IMSPage';

test.describe('IMS Tests', () => {
    let page: any;
    let imsPage: IMSPage;

    test.beforeEach(async ({ page: p }, testInfo) => {
        page = p;
        imsPage = new IMSPage(page);
        await page.goto('https://qa.cliquidator.info/c/');  // TODO: GROSS
        await page.waitForTimeout(20000);   // TODO: GROSS
    });

    test('Navigate to Item View', async ({ page }, testInfo) => {
        await imsPage.navigateToItemView();
        await expect(page).toHaveURL(/.*item-view/);
    });

    test('Navigate to Submission View', async () => {
        await imsPage.navigateToSubmissionView();
        await expect(page).toHaveURL(/.*submission-view/);
    });

    test('Search by ICN', async () => {
        await imsPage.search('ICN12345');
        await expect(page).toHaveURL(/.*search-results/);
    });

    test('Claim a Submission', async () => {
        await imsPage.claimSubmission();
        const claimStatus = imsPage.claimButton.textContent();
        await expect(claimStatus).toContain('Unclaim');
    });

    test('Unclaim a Submission', async () => {
        await imsPage.unclaimSubmission();
        const claimStatus = imsPage.unclaimButton.textContent();
        await expect(claimStatus).toContain('Claim');
    });

    test('Change Rows Per Page', async () => {
        await imsPage.setRowsPerPage('25');
        const selectedOption = await imsPage.rowsPerPageDropdown.inputValue();
        expect(selectedOption).toBe('25');
    });

    test('Pagination Controls', async () => {
        await imsPage.navigatePagination('Next page');
        const isNextPage = page.url().includes('page=2');
        expect(isNextPage).toBeTruthy();
    });
});
