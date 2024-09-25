const webScreen = require("../screenobjects/web.screen");
const mobileScreen = require("../screenobjects/mobile.screen");

describe('Sample', () => {
    it('Sample Test', async () => {
        //Web Mode
        //Launch the browser
        await browser.maximizeWindow();

        //Navigate to Google
        await browser.url('https://www.google.com');

        //Perform search actions
        await web.$(webScreen.fields.searchField).setValue("Automation Practice");
        await web.$(webScreen.buttons.searchBtn).click();

        //Change to Mobile Mode
        await mobile.$(mobileScreen.buttons.textBtn).click();
    })
})