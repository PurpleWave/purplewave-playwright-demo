import { Page, Locator } from 'playwright';

/**
 * IMSPage class for interacting with IMS functionalities.
 */
export class IMSPage {
    private page: Page;

    public itemLink: Locator;
    public submissionLink: Locator;
    public searchInput: Locator;
    public claimButton: Locator;
    public unclaimButton: Locator;
    public rowsPerPageDropdown: Locator;
    public paginationControls: Locator;

    constructor(page: Page) {
        this.page = page;

        this.itemLink = this.page.getByRole('link', { name: 'Item View' });
        this.submissionLink = this.page.getByRole('link', { name: 'Submission View' });
        this.searchInput = this.page.getByPlaceholder('Search by ICN, VIN, Submission');
        this.claimButton = this.page.getByRole('button', { name: 'Claim' });
        this.unclaimButton = this.page.getByRole('button', { name: 'Unclaim' });
        this.rowsPerPageDropdown = this.page.locator('select[name="rows-per-page"]');
        this.paginationControls = this.page.locator('.pagination-controls');
    }

    public async navigateToItemView(): Promise<void> {
        await this.itemLink.click();
    }

    public async navigateToSubmissionView(): Promise<void> {
        await this.submissionLink.click();
    }

    public async search(query: string): Promise<void> {
        await this.searchInput.fill(query);
        await this.searchInput.press('Enter');
    }

    public async claimSubmission(): Promise<void> {
        await this.claimButton.click();
    }

    public async unclaimSubmission(): Promise<void> {
        await this.unclaimButton.click();
    }

    public async setRowsPerPage(option: string): Promise<void> {
        await this.rowsPerPageDropdown.selectOption(option);
    }

    public async navigatePagination(action: string): Promise<void> {
        const control = this.paginationControls.locator(`button[aria-label="${action}"]`);
        await control.click();
    }
}
