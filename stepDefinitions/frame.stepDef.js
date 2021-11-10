var {Given,When, Then} =require('cucumber');
var {browser} =require('protractor');

When('user navigates to the Url {string}',async function (url) {
   await browser.get(url);
   await browser.manage().window().maximize();
   await browser.sleep(3000); 
});