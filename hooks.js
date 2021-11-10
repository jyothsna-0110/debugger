var { BeforeAll, AfterAll, AfterStep } = require('cucumber');

var propertiesReader = require('properties-reader');
const { protractor } = require('protractor/built/ptor');
var prop = propertiesReader('properties/login.properties');

BeforeAll(async function () {
    await browser.waitForAngularEnabled(false);
    await browser.get(prop.get('url'));
    await browser.manage().window().maximize();

});

AfterStep(async function () {
    var screenShot = await browser.takeScreenshot();
    await this.attach(screenShot, "image/png");
});

AfterAll(async function () {
    await element(by.xpath('//a[@class="iframe-link a-cursor profile-arrow"]')).click();
    await element(by.xpath('//span[text()="Logout"]')).click();
    await browser.sleep(4000);
});