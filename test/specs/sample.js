describe('Sample', () => {
    it('Sample Test', async () => {
        await a.url("https://www.google.com");

        await b.startActivity("io.appium.android.apis", "io.appium.android.apis.ApiDemos");
        await (await b.$("~Text")).click();
    })
})