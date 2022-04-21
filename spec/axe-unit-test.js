var AxeBuilder = require("./node_modules/axe-webdriverjs"),
    Webdriver = require("./node_modules/selenium-webdriver")

describe("Some page", function () {
    it("should have no accessibility violations", function (done) {
        var driver = new Webdriver.Builder().forBrowser("chrome").build()

        driver.get("http://localhost:3333").then(function (done) {
            AxeBuilder(driver).analyze(function (results) {
                expect(results.violations.length).toBe(0)
                done()
            })
        })
    })
})
