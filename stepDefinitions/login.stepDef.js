require('../hooks')
var { Given, When, Then } = require('cucumber');
var { browser, element } = require('protractor');
var { expect } = require('chai');

var propertiesReader = require('properties-reader');
const { protractor } = require('protractor/built/ptor');
var prop = propertiesReader('properties/login.properties');

var EC = browser.ExpectedConditions;

//var  screenShot = require('../pages/screenshot.page.js');

Given('admin navigates to url', async function () {
    try {
        await browser.waitForAngularEnabled(false);
        await browser.get(prop.get('url'));
        await browser.manage().window().maximize();
        await browser.wait(EC.visibilityOf(element(by.id('username'))), 100000);
        // await screenShot.takeScreenShot();
       

    } catch (error) {
        console.log(error);
    }
});



Then('admin enters the username', async function () {
    try {
        await element(by.id('username')).sendKeys(prop.get('username'));
       
        // await screenShot.takeScreenShot();

    } catch (error) {
        console.log(error);
    }
});



Then('admin enters the password', async function () {
    try {
        await element(by.id('password')).sendKeys(prop.get('password'));
       
        // await screenShot.takeScreenShot();

    } catch (error) {
        console.log(error);
    }
});


Then('admin clicks on the sign in button', async function () {
    try {
        await element(by.id('kc-login')).click();
        // await screenShot.takeScreenShot();


    } catch (error) {
        console.log(error);
    }
});


Then('admin enters the project name as {string}', async function (ProjectName) {
    try {
        await browser.waitForAngularEnabled(false);
        await browser.wait(EC.visibilityOf(element(by.xpath('//h1[text()="Project Listing"]'))), 10000);
        await element(by.xpath('//input[@placeholder="Search"]')).sendKeys(ProjectName);
        await browser.actions().sendKeys(protractor.Key.ENTER).perform();
        await browser.sleep(15000);
        // await screenShot.takeScreenShot();


    } catch (error) {
        console.log(error);
    }
});


Then('admin clicks on the project', async function () {
    try {
        await element(by.xpath('//h3[text()=" Automation_S1 "]')).click();
        await browser.wait(EC.visibilityOf(element(by.xpath('//a[text()="Dashboard"]'))), 100000);
        // await screenShot.takeScreenShot();


    } catch (error) {
        console.log(error);
    }
});


Then('admin selects the tickets', async function () {
    try {
        await element(by.xpath('//a[text()="Tickets"]')).click();
        await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="INC0828027"]'))), 100000);

        await element(by.xpath('//span[text()="INC0828027"]')).isDisplayed().then(function (select) {

            expect(select).to.be.true;

            //var text = element(by.xpath("//div[@class='smo-table-scrollable-body ng-star-inserted']")).getText();

            //var text = element(by.xpath("//tr[@class='dropdown-hover ng-star-inserted'][1]")).getText();

            var text = element.all(by.tagName('tr')).get(1).getText()
            text.then(rowText => {
                console.log("-------------------------------------------");
                console.log("-------ROW TEXT IS--------------" + rowText);
            });
        });

        // await screenShot.takeScreenShot();

    } catch (error) {
        console.log(error);
    }
});

