import {expect, test} from '@playwright/test';
import {XMLParser} from 'fast-xml-parser';
import {InventoryPage} from '../../pages/fe/Inventory.page';
import {authentication, createDirectus, readItems, rest} from '@directus/sdk';

const client = createDirectus('http://directus.example.com');
test('Test all URLs in sitemap', async ({page}) => {
    test.setTimeout(3600000); // 60 mins

    // Dynamically import node-fetch
    const fetch = (await import('node-fetch')).default;

    // Fetch the sitemap
    const response = await fetch('https://qa-v2.cliquidator.info/sitemaps/sitemaplandingpages.xml');
    // Get the sitemap XML content
    const xml = await response.text();


    const parser = new XMLParser({
        ignoreAttributes: false,
        removeNSPrefix: true,
    });

    const parsedXml = parser.parse(xml);

    const urlset = parsedXml.urlset;
    const urls = Array.isArray(urlset.url)
        ? urlset.url.map((u: any) => u.loc)
        : [urlset.url.loc]; // Handle a single <url> element scenario

    let total = 0;
    for (var url of urls) {
        total++;
        const inventoryPage = new InventoryPage(page);
        console.log(url);

        await page.goto(url);
        await page.waitForLoadState("domcontentloaded");

        await expect(inventoryPage.h1Title).toBeVisible();
        await expect(inventoryPage.description).toBeVisible();
        await expect(inventoryPage.registerButton).toBeVisible();

        // TODO: Test href attribute in the next line
        await expect(inventoryPage.homeBreadcrumb).toBeVisible();
        await expect(inventoryPage.inventoryBreadcrumb).toHaveText(await inventoryPage.h1Title.textContent());
        await expect(inventoryPage.inventoryBreadcrumb).toHaveAttribute('href', expect.stringContaining(page.url()));


        await expect(inventoryPage.recommendedForYouText).toBeVisible();
        await expect(inventoryPage.recommendedItem).toBeVisible();

        // TODO: Investigate flakiness
        await expect(inventoryPage.heroImage).toBeVisible({timeout: 15000});

        // If no items are found, then skip the rest of the checks
        if (await inventoryPage.noItemsFoundMessage.isVisible()) {
            console.log(`No items found for URL: ${url}`);
            continue; // Skip to the next URL
        }
        await expect(inventoryPage.sortByDropdown).toBeVisible();
        await expect(inventoryPage.itemsPerPageDropdown).toBeVisible();
        await expect(inventoryPage.auctionDateAccordion).toBeVisible();
        await expect(inventoryPage.zipRadiusAccordion).toBeVisible();
        // TODO: Needs logic for ignoring certain accordions based on the inventory or page type
        //  await expect(inventoryPage.makeAccordion).toBeVisible();
        //  await expect(inventoryPage.yearAccordion).toBeVisible();
        //  await expect(inventoryPage.stateAccordion).toBeVisible();
        await expect(inventoryPage.cityAccordion).toBeVisible();
        await expect(inventoryPage.currentBidAccordion).toBeVisible();

    }

    console.log("Total: " + total);

});

test('Verify landing pages against Directus', async ({page}) => {
    const client = createDirectus('https://pw.directus.app/').with(authentication()).with(rest());
    //
    await client.setToken('');
    const landingPages = await client.request(readItems('Inventory_Pages'));

    let allItems = [];
    let p = 1;
    const limit = 1000;

    while (p < 3) {
        console.log(p);
        const response = await client.request(readItems('Inventory_Pages', {
            limit,
            p,
        }));

        if (response.length === 0) {
            break;
        }

        allItems = allItems.concat(response);
        p++;
    }

    console.log(allItems);

    }
);