module.exports = {

    takeScreenShot: function () {

        var screenShot =  browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
}