// import test 
import { test } from 'playwright/test'

// a simple test to open Purplewave.com, wait till everything is loaded and then reload the page
test('Open PurpleWave.com and reload page', async ({page})=>{
    await page.goto('https://www.purplewave.com/');
    // TODO: Refactor - this implicit wait
    // TODO: Consider - what are other types of waits you could use? Why would you choose one over the other?
    await page.waitForTimeout(3000);
    await page.reload();
});

test('Interacting with an element at Purplewave.com', async({page})=>{
    await page.goto('https://www.purplewave.com/')
    // TODO: Refactor - place into a header page object file
    // TODO: Consider - what are other ways to click on this element? By role? By label?
    // await page.click('#header_login');

    // TRAINING - using page.locator we can access the parent ID of '#header' and then use getByRole to select child elements
    await page.locator("#header").getByRole("button", {name: "Login or Register"}).click(); // TRAINING - Notice this is a button, not a link :D

    // await page.click(':has-text("Register here.")');    // TRAINING - built in argument :has-text maybe slower?
    await page.getByRole("link", {name: 'Register here.'}).click();
    
    await page.waitForTimeout(3000);
});